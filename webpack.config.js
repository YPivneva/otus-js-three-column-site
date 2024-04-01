const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
// eslint-disable-next-line
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// eslint-disable-next-line
const TerserPlugin = require("terser-webpack-plugin");

const srcPath = "./src";

function getAllHtmlFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      // eslint-disable-next-line no-param-reassign
      filesList = getAllHtmlFiles(filePath, filesList);
    } else if (filePath.endsWith(".html")) {
      filesList.push({
        template: filePath,
        filename: path.relative(srcPath, filePath),
      });
    }
  });
  return filesList;
}

const htmlFilesSettings = getAllHtmlFiles(srcPath).map(
  (file) => new HtmlWebpackPlugin(file),
);

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(png|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name]-[hash][ext]",
        },
      },
    ],
  },
  devServer: {
    compress: false,
    open: true,
    port: 3000,
    hot: true,
  },
  plugins: [
    ...htmlFilesSettings,
    // new CssMinimizerPlugin(),
    new TerserPlugin(),
  ],
};
