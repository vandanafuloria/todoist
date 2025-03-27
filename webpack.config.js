import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// Deriving __dirname using import.meta.url (since __dirname is not available in ES modules)
const __dirname = new URL(".", import.meta.url).pathname;

export default {
  mode: "development", // Mode can be 'development' or 'production'

  // Entry point for your app
  entry: "./src/scripts/index.js", // Change this to your entry file

  // Output configuration
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // Output to a 'dist' folder
  },

  // Module rules for processing files
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/, // Images (PNG, JPG, GIF, SVG)
        type: "asset/resource", // This will handle the image files
        generator: {
          filename: "images/[name][hash][ext][query]", // Output path and file name format
        },
      },
      {
        test: /\.html$/i, // Match .html files
        loader: "html-loader", // Use the html-loader
      },
      {
        test: /\.css$/, // Target CSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          "css-loader", // Process CSS
        ],
      },
    ],
  },

  // Plugins for handling HTML and CSS files
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to your HTML template
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css", // Output filename for the extracted CSS
    }),
  ],
};
