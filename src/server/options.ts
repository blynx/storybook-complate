const packageJson = require('../../package.json');

export default {
  packageJson,
  framework: 'complate',
  frameworkPresets: [require.resolve('./framework-preset-complate.js')],
};
