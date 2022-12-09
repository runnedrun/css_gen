import * as puppeteer from "puppeteer"

const ERROR = "ERROR"

export const htmlArrayToImages = async (htmlArray: string[]) => {
  const images = []
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
    // executablePath: stats.executablePath,
  })

  const page = await browser.newPage()

  for (let i = 0; i < htmlArray.length; i++) {
    await page.setContent(htmlArray[i])

    const image = await page
      .screenshot({
        fullPage: true,
        encoding: "binary",
      })
      .then(
        (_) => _,
        (_) => {
          return ERROR
        }
      )

    images.push(image)
  }
  return images
}
