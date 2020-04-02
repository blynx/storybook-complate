import { Configuration } from 'webpack';

export function webpack(config: Configuration) {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.complate(\.jsx?)?$/,
          loader: require.resolve('babel-loader'),
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
        }
      ]
    },
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, '.complate', '.complate.jsx'],
      alias: config.resolve.alias
    }
  }
}
