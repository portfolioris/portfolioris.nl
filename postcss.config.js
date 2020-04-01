module.exports = {
  plugins: {
    autoprefixer: {
      grid: true,
    },
    'postcss-normalize': {},
    // 'postcss-object-fit-images': {},
    'postcss-pxtorem': {
      propList: ['*'],
      minPixelValue: 4,
    },
  },
};
