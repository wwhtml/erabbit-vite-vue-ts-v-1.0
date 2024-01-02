/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    /* eslint */
    "vue/multi-word-component-names": "off", //必须采用多词组件名称：关闭

    /* typescript-eslint */
    "@typescript-eslint/no-unused-vars": "off" //禁止声明未使用的变量  关闭
  }
};
