// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true, // 启用jsx
    }
  },

  // 开启约定规则
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended'
  ],

  env: {
    browser: true,
  },


  // required to lint *.vue files
  plugins: [
    'vue',
  ],

  // add your custom rules here
  rules: {
    // Best Practices
    'block-scoped-var': 'error', // 强制变量在其作用域内使用
    'class-methods-use-this': [ // 强制class使用this
      'error',
      {
        'exceptMethods': []
      }
    ],
    'no-debugger': 'warn',
    'no-console': 'warn',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-alert': 'error', // 禁用alert confirm
    'no-eval': 'error', // 金庸eval
    'no-multi-spaces': "error", // 禁止使用多个空格
    'no-multi-str': "error", // 禁止使用多行字符串
    'no-new-func': "error", // 禁止使用new Function
    'no-new-wrappers': "error", // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-return-assign': 'error', // 禁止在return 中使用赋值语句
    'no-return-await': 'error', // 禁止不必要的return await
    'radix': 'error', // 强制paserInt使用基数参数

    // 以下是代码风格
    'no-extra-parens': ["error", "all"], // 禁止任何地方出现不必要的圆括号
    'array-bracket-spacing': ["error", "never"], // 中括号内禁用多余的空格或空行
    'array-bracket-newline': ["error", "consistent"], // 中括号使用一致的换行规则
    'array-element-newline': ["error", "consistent"], // 数组间使用一致的换行规则
    'block-spacing': "error", // 左花括号前后必须有一个空格
    'brace-style': ["error", "stroustrup"], // 左大括号不换行
    'camelcase': ["error", {properties: "never"}], // 强制使用驼峰命名法
    'comma-dangle': ["error", "always-multiline"], // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号
    'comma-spacing': ["error", { "before": false, "after": true }], // 逗号前禁止使用空格，逗号后使用必须一个或多个空额
    'comma-style': ["error", "last"], //要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    'computed-property-spacing': ["error", "never"], // 禁止在计算属性中括号中使用空格
    'eol-last': ["error", "always"], // 禁止文件末尾存在空行
    'func-call-spacing': ["error", "never"], // 禁止在函数调用的函数名和开括号之间有空格
    'function-paren-newline': ["error", "multiline"], // 如果函数的任一参数有换行，则要求在函数括号内换行。否则禁止换行
    'implicit-arrow-linebreak': ["error", "beside"], // 禁止在箭头函数体之前出现换行
    'indent': ["error", 2], // 强制使用两个空格换行
    // 'id-length': ["error", { min: 3, max: 30 }], // 强制标识符的最大为20和最小长度为3
    'jsx-quotes': ["error", "prefer-single"], // 强制所有不包含单引号的 JSX 属性值使用单引号
    'key-spacing': ["error", { "beforeColon": false, "afterColon": true }], // 要求对象字面量冒号前无空格，冒号与值之间有一个空格
    'keyword-spacing': ["error", { "before": true, after: true }], // 强制关键字前后必须有一个空格
    'new-cap': "error", //要求构造函数首字母大写
    'newline-per-chained-call': ["error", { "ignoreChainWithDepth": 2 }], // 要求链式调用多于两层时换行
    'no-array-constructor': "error", // 禁止使用Array构造函数
    'no-new-object': "error", // 禁用Object构造函数
    'no-lonely-if': "error", // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-multi-assign': "error", // 禁止连续赋值
    'no-multiple-empty-lines': ["error", { "max": 2}], // 强制连续换行不得大于两行
    'no-trailing-spaces': ["error", { "skipBlankLines": false, "ignoreComments": false }], // 禁止在空行和块注释中使用空白符
    'no-unneeded-ternary': "error", // 禁止在有更简单的表达式时使用三元操作符
    'no-whitespace-before-property': "error", // 禁止点操作符前后有空白
    'nonblock-statement-body-position': ["error", "beside"], // 禁止单行语句前有换行
    'object-curly-newline': ["error", { "multiline": true }], // 要求花括号间有一致的换行操作
    'object-curly-spacing': ["error", "always"], // 要求花括号内有空格
    'quotes': ["error", "backtick"], // 要求尽可能地使用反引号
    'semi-spacing': ["error", {"before": false, "after": true}], // 强制分号之后有空格，禁止分号之前有空格
    'space-before-blocks': "error", // 要求块之前有空格
    'space-before-function-paren': "error", // 要求function函数左圆括号之前有一个空格
    'space-in-parens': ["error", "never"], // 强制圆括号内不能有空格
    'space-unary-ops': "error", // 强制 words 一元操作符后空格和 nonwords 一元操作符之前或之后的空格的一致性

    // es6
    'arrow-spacing': "error", // 强制箭头函数箭头左右有一个空格
    'no-var': "error", // 禁用var
    'prefer-template': "error", // 禁用字符串连接，使用模板字符串
    'prefer-const': "error", // 不变量使用const
    

    'generator-star-spacing': 'warn',
    'no-global-assign': ['error'],
    'vue/no-unused-components': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        switchCase: 1
      }
    ],
    'vue/html-indent': [
      'error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: [],
      }],
  },

  overrides: [
    {
      files: [
        '*.vue'
      ],
      rules: {
        indent: 'off'
      }
    }
  ],
}
