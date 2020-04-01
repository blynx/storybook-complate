

## Setup

Add this repo as dev dependecy `"@storybook/complate": "git://github.com/blynx/storybook-complate.git"`.  
Keep `"@storybook/complate"`!

Install also:

```
npm install complate-dom --save
npm install babel-loader @babel/core --save-dev
```

Add npm script

```
"scripts": {
  "storybook": "start-storybook"
}
```

Create `.storybook/main.js` file.

In it, besides your stories, add another babel-loader. For some reason this is necessary right now - it should be handled by this package actually.

```
const path = require("path");

module.exports = {
  
  // your stories
  stories: ['../src/**/*.stories.js'],
  
  // for some reason this is still necessary. It should not - maybe the include path has quirks.
  webpackFinal: (config) => {

    config.module.rules.push({
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: [
            ["@babel/plugin-transform-react-jsx", {
              "throwIfNamespace": false,
              "pragma": "createElement"
            }]
          ]
        }
      },
      include: path.resolve(__dirname, '../src/'),
    });

    return config
  },
};

```

Continue at Step 4: https://storybook.js.org/docs/guides/guide-preact/

## Run

`npm run storybook`