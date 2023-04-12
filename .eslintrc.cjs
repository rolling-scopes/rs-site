module.exports = {
  extends: ['next', 'next/core-web-vitals', 'airbnb-base', 'prettier'],
  rules: {
    'import/extensions': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_ref', '_id']
      }
    ],
    'import/prefer-default-export': 'off',

    'import/no-unresolved': [
      'error',
      {
        // https://github.com/browserify/resolve/issues/222
        ignore: ['^swiper/.*']
      }
    ],

    'import/no-internal-modules': [
      'error',
      {
        forbid: ['@/*/*/*']
      }
    ]
  }
};
