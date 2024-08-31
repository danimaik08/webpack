import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type Options = {
  mode: 'development' | 'production';
  html: string;
};

export default function buildPlugins(
  options: Options
): webpack.Configuration['plugins'] {
  const isDev = options.mode === 'development';

  return [
    new HtmlWebpackPlugin({
      template: options.html,
    }),
    isDev && new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      'process.env.OK': true,
    }),
  ];
}
