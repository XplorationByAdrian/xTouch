import { Configuration } from 'webpack';
import * as path from 'path';
import { outDir, appSrc, appNodeModules } from '../config/paths';

const config: Configuration = {
  entry: path.resolve(appSrc, 'xtouch.ts'),
  mode: 'production',
  target: 'node',
  output: {
    path: outDir,
    filename: 'xtouch.js',
  },
  resolve: {
    extensions: ['.ts', '.ts', '.json'],
    modules: ['node_modules', appNodeModules].concat(appSrc || []),
  },
  module: {
    rules: [
      {
        test: /.ts/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

export default config;
