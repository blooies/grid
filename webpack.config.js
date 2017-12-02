const path = require('path');
const webpack = require('webpack');
const yml = require('node-yaml');
const read = require('read-data');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const config = yml.readSync('config.yml');
const env = config[NODE_ENV];

// get environment variables (username/password);
const envVars = Object.keys(env).reduce((a, k) => {
  a[k] = JSON.stringify(env[k]);
  return a;
}, {});


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/js/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), './index.ejs'),
    }),
    new webpack.DefinePlugin({
      'process.env': Object.assign({
        NODE_ENV: JSON.stringify(NODE_ENV)
      }, envVars)
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
			React: "react",
			ReactDOM: "react-dom"
		})
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: [/node_modules/, /styles/],

        // TODO: add es-linter
        // loaders: ['eslint-loader']
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /styles/],
        loaders: ['babel-loader']
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'less-loader']})
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  // set up dev server
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    historyApiFallback: true,

    // mock up fake endpoints
    before(app) {
      app.get('/data', function(req, res) {
        const data = read.sync('data.json');
        res.json({ users: data });
      });

      app.get('/user', function(req, res) {
        res.json({ data: {
          username: JSON.parse(envVars.USERNAME),
          password: JSON.parse(envVars.PASSWORD)
        }});
      });
    }
  },
  stats: 'minimal'
};
