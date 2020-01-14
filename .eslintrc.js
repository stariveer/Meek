module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  globals: {
    _gaq: false,
    process: false,
    ActiveXObject: false,
    VERSION: false,
    // Build globals
    __dirname: false,
    // Test globals
    after: false,
    afterEach: false,
    assert: false,
    before: false,
    beforeEach: false,
    describe: false,
    expect: false,
    it: false,
    sinon: false,
    xit: false,
    console: false,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    // semi: ['error', ''],
    'no-var': 'error',
    'linebreak-style': 0,
  },
};
