import * as React from "react"
import * as ReactDOMServer from "react-dom/server"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { CacheProvider } from "@emotion/react"
import createEmotionServer from "@emotion/server/create-instance"
import createEmotionCache from "./createEmotionCache"
import App from "./App"
import theme from "./theme"

function renderFullPage(html: string, css: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <meta name="emotion-insertion-point" content="" />
        ${css}
      </head>
      <body>
        <script async src="build/bundle.js"></script>
        <div id="root">${html}</div>
      </body>
    </html>
  `
}

export function generateThemeGeneHtml(components: React.ComponentType[]) {
  const cache = createEmotionCache()
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache)

  const renderedStrings = components.map((Component) => {
    const html = ReactDOMServer.renderToString(
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component />
        </ThemeProvider>
      </CacheProvider>
    )

    const emotionChunks = extractCriticalToChunks(html)
    const emotionCss = constructStyleTagsFromChunks(emotionChunks)

    // Send the rendered page back to the client.
    return renderFullPage(html, emotionCss)
  })

  return renderedStrings
}
