module.exports = {
  env: {
    es2020: true
  },
  extends: ["google", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-var": "off",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    unused_variable: "off",
    camelcase: "off"
  }
};
