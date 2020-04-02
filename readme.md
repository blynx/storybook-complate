

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

Add your stories. If not configured otherwise Cmplate will work for files with the file endings: `.complate, .complate.jsx, .complate.js`

If you want to add a complate story, you'll need to apply complate to the stories file name as well.  
For example: `stories: ['../src/**/*.stories.(complate.jsx)']`

Continue at Step 4: https://storybook.js.org/docs/guides/guide-preact/

## Run

`npm run storybook`