import webpack from 'webpack';

type Options = {
  mode: 'development' | 'production';
};

export default function buildLoaders(
  options: Options
): webpack.Configuration['module'] {
  const isDev = options.mode === 'development';

  const tsLoader = {
    test: /\.tsx?$/i,
    loader: 'ts-loader',
    options: {
      transpileOnly: !isDev,
    },
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
    exclude: /node_modules/,
  };

  return {
    rules: [tsLoader, cssLoader],
  };
}
