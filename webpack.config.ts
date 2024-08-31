import webpack from 'webpack';
import 'webpack-dev-server';

import buildWebpack from './config/build/buildWebpack';

type Env = {
  mode?: 'development' | 'production';
  port?: string;
};

export default (env: Env): webpack.Configuration => {
  const configuration: webpack.Configuration = buildWebpack({
    mode: env.mode ?? 'development',
    port: +(env.port ?? 3000),
    rootDirectory: __dirname,
  });

  return configuration;
};
