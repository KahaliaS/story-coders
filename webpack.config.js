const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    //added from unit 9
    publicPath: "/",
    filename: "bundle.js",
  },
  //added from unit 9
  devtool: "eval-source-map",
  mode: "development",
  devServer: {
    host: "localhost",
    port: 8080,
    // match the output path
    static: {
      directory: path.resolve(__dirname, "dist"),
      // match the output 'publicPath'
      publicPath: "/",
    },
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    proxy: {
      "/api/students/**": {
        target: "http://localhost:3000/",
        secure: false,
        // },
        // "/**": {
        //   target: "http://localhost:3000/",
        //   secure: false,
      },
    },
  },
  //end of added from unit 9

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
