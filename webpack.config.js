const webpack = require('webpack');
const path = require('path');

const paths = {
  src: path.join(__dirname, 'src'),
  nodeModules: path.join(__dirname, 'node_modules'),
};

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  target: 'web',
  stats: 'verbose',
  devServer: {
    static: './public',
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  entry: {
    app: 'entrypoints/App',
  },
  output: {
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: [paths.src, paths.nodeModules],
  },
  module: {
    noParse: [/\.stories\.(ts|tsx)$/],
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [paths.src],
        exclude: [paths.nodeModules],
        use: ['thread-loader', 'babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        include: [paths.src],
        exclude: [paths.nodeModules],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin()],
};
