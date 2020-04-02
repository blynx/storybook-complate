import { TransformOptions, resolvePlugin } from '@babel/core';
import { Configuration } from 'webpack';

// export function babelDefault(config: TransformOptions) {
//   return {
//     ...config,
//     plugins: [
//       ...config.plugins,
//       [require.resolve('@babel/plugin-transform-react-jsx'), { pragma: 'createElement' }],
//     ],
//   };
// }

export function webpack(config: Configuration) {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        {
          test: /\.(complate)(\.jsx)?$/,
          loader: require.resolve('babel-loader'),
          enforce: 'pre',
          options: {
            plugins: [
              [
                require.resolve("@babel/plugin-transform-react-jsx"),
                {
                  "throwIfNamespace": false,
                  "pragma": "createElement"
                },
                "complate-jsx"
              ]
            ]
          }
        },
        ...config.module.rules,
      ]
    },
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, '.complate', '.complate.jsx'],
      alias: config.resolve.alias
    }
  }
}
