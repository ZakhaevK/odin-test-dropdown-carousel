// webpack.config.js
/* 
This is a Webpack configuration file that contains all details
needed for bundling, like entry point, output destination, and 
anything like plugins and loaders.
*/
import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
});
