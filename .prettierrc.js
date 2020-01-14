module.exports = {
  // Include parentheses around a sole arrow function parameter
  arrowParens: 'avoid',
  // 对象大括号之间是否有空格，默认为true，效果：{ foo: bar }
  bracketSpacing: true,
  // A list of languages IDs to disable this extension on
  disableLanguages: ['vue'],
  // Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.
  eslintIntegration: true,
  // Path to a .prettierignore or similar file
  ignorePath: '.prettierignore',
  // If true, puts the `>` of a multi-line jsx element at the end of the last line instead of being alone on the next line
  jsxBracketSameLine: false,
  // 一行的字符数，如果超过会进行换行，默认为80
  printWidth: 80,
  // 一个tab代表几个空格数，默认为80
  tabWidth: 2,
  // 字符串是否使用单引号，默认为false，使用双引号
  singleQuote: true,
  // Use 'prettier-stylelint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from stylelint rules.
  stylelintIntegration: false,
  // 行尾是否使用分号，默认为true
  semi: true,
  // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  trailingComma: 'es5',
  // 代码的解析引擎，默认为babylon，与babel相同。
  // parser: 'babylon',
  // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  useTabs: false,
  cssEnable: ['css', 'less', 'sass'],
};
