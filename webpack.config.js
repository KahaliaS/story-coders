const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new FaviconsWebpackPlugin("./src/components/imgs/icon/favicon.ico"),
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      // // CSS rules
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: "style-loader" },
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: true,
      //       },
      //     },
      //     { loader: "sass-loader" },
      //   ],
      // },
      // CSS rules
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
