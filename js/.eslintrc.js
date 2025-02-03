module.exports = {
  env: {
    es2021: true
  },
  extends: ["google", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-var": "off",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "no-extend-native": "off",
    unused_variable: "off",
    camelcase: "off"
  }
};
