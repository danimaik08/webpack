import path from 'path';
import webpack from 'webpack';

type Options = {
  rootDirectory: string;
};

export default function buildResolve(
  options: Options
): webpack.Configuration['resolve'] {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': path.resolve(options.rootDirectory, 'src'),
    },
  };
}
