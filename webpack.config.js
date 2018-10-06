const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require('postcss-preset-env');


module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },
    {
      test: /\.html$/,
      //exclude: /photos-partial\.html$/, //without this the underscore template won't be executed.
      include: path.join(__dirname, 'src/html'),
      use: [{
        loader: "html-loader",
        options: {
          minimize: true,
          interpolate: true,
          attrs: ['img:src', 'source:srcset']
        }
      }]
    },
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            ident: 'postcss',
            plugins: () => [
              postcssPresetEnv( /* options */)
            ]
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    },
    {
      test: /\.(eot|woff|woff2|ttf)$/,
      use: {
        loader: "file-loader",
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
    },
    {
      test: /(img|background-icons).*\.(jpg|png|svg)$/,
      use: {
        loader: "file-loader",
        options: {
          name: '[name].[ext]',
          outputPath: 'img/'
        }
      }
    },
    {
      test: /\.svg$/,
      exclude: /background-icons/,
      use: {
        loader: 'svg-sprite-loader',
        options: {}
      }
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Index',
      template: "./src/html/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      title: 'Form',
      template: "./src/html/form.html",
      filename: "./form.html"
    }),
    new HtmlWebPackPlugin({
      title: 'Photos',
      template: "./src/html/photos.html",
      filename: "./photos.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ]
};