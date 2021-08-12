const pxtorem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    require('postcss-preset-env'),
    pxtorem({
      propList: ['*'],
      minPixelValue: 4,
    }),
  ],
};
