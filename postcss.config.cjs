module.exports = {
  plugins: {
    'postcss-dir-pseudo-class': {},
    'postcss-logical': {
      preserve: true,
    },
    autoprefixer: {
      // grid: true,
    },
    // 'postcss-normalize': {},
    // 'postcss-object-fit-images': {},
    'postcss-pxtorem': {
      propList: ['*'],
      minPixelValue: 4,
    },
  },
};
