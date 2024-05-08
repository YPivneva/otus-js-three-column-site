const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// eslint-disable-next-line
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash:8].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader?name=/img/[name].[ext]",
          },
        ],
      },
    ],
  },
  devServer: {
    static: "./dist",
  },
  optimization: {
    minimize: true,
    minimizer: [new HtmlMinimizerPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "paper/avtorization.html",
      template: "src/paper/avtorization.html",
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "paper/layout-and-stub.html",
      template: "src/paper/layout-and-stub.html",
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "chat/chat-content.html",
      template: "src/chat/chat-content.html",
    }),
    new TerserPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
