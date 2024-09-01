import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackBundleAnalyzer from 'webpack-bundle-analyzer';

import * as Helper from './helper';

type Options = {
  mode: 'development' | 'production';
  html: string;
};

export default function buildPlugins(
  options: Options
): webpack.Configuration['plugins'] {
  const isDev = options.mode === 'development';

  const useBundleAnalyzer = Helper.calculateUseBundleAnalyzerFlag();

  return [
    new HtmlWebpackPlugin({
      template: options.html,
    }),
    isDev && new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      'process.env.OK': true,
    }),
    useBundleAnalyzer && new WebpackBundleAnalyzer.BundleAnalyzerPlugin(),
  ];
}
