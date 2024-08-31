import webpack from 'webpack';
import 'webpack-dev-server';
import path from 'path';
import dotenv from 'dotenv';

import buildLoaders from './buildLoaders';
import buildResolve from './buildResolve';
import buildPlugins from './buildPlugins';
import buildDevServer from './buildDevServer';

dotenv.config();

type Options = {
  mode: 'development' | 'production';
  port: number;
  rootDirectory: string;
};

export default (options: Options): webpack.Configuration => {
  const { mode, rootDirectory } = options;

  const isDev = mode === 'development';

  const configuration: webpack.Configuration = {
    mode,
    devtool: isDev && 'inline-source-map',
    entry: path.resolve(rootDirectory, 'src', 'index.tsx'),
    output: {
      path: path.resolve(rootDirectory, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    module: buildLoaders(),
    resolve: buildResolve(options),
    plugins: buildPlugins(options),
    devServer: buildDevServer(options),
  };

  return configuration;
};
