const path = require("path")
const nodeExternals = require("webpack-node-externals")

module.exports = {
  mode: "development",
  entry: "./functions/src/index",
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
  },
  externals: [nodeExternals()],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "this", // <-- Important
  },
}
