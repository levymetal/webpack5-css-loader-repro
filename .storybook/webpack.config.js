const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const custom = require('../webpack.config.js');

const paths = {
  src: path.join(__dirname, '..', 'src'),
};

module.exports = async ({config, mode}) => {
  return {
    ...config,
    mode: 'development',
    devtool: 'eval',
    watchOptions: custom.watchOptions,
    stats: 'verbose',
    module: {
      ...config.module,
      rules: custom.module.rules,
    },
    resolve: {
      ...config.resolve,
      ...custom.resolve,
      modules: [paths.src, 'node_modules'],
    },
    plugins: [...config.plugins, new MiniCssExtractPlugin()],
  };
};
