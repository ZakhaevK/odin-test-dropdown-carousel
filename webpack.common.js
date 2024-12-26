// webpack.config.js
/* 
This is a Webpack configuration file that contains all details
needed for bundling, like entry point, output destination, and 
anything like plugins and loaders.
*/
import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const entry = "./src/index.js";
export const output = {
  filename: "main.js",
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, "dist"), // Output directory, in this case, dist
  clean: true, // Empties output directory each time webpack is run to bundle
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/template.html",
  }),
];
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.html$/i,
      loader: "html-loader",
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },
  ],
};
