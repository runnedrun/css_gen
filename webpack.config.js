const path = require("path")

module.exports = {
  mode: "development",
  entry: "./server.tsx",
  target: "node",
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    // fallback: {
    //   fs: false,
    //   tls: false,
    //   net: false,
    //   path: false,
    //   zlib: false,
    //   http: false,
    //   https: false,
    //   stream: false,
    //   crypto: false,
    //   buffer: false,
    // },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
}
