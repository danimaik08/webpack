import webpack from 'webpack';

export default function buildLoaders(): webpack.Configuration['module'] {
  const tsLoader = {
    test: /\.tsx?$/i,
    use: 'ts-loader',
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
