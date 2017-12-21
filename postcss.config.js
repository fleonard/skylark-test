module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-extend'),
    require('postcss-mixins'),
    require('postcss-each'),
    require('postcss-at-rules-variables'),
    require('postcss-for'),
    require('postcss-conditionals'),
    require('postcss-cssnext'),
    require('postcss-math'),
    // These are always nice to have
    require('postcss-plugin-px2rem')({
      rootValue: 16,
      unitPrecision: 4,
      minPixelValue: 1
    }),
    require('postcss-nested'),
  ]
};