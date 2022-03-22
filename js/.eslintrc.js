module.exports = {
  env: {
    es2020: true
  },
  extends: ["google", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-var": "off",
    "no-unused-vars": "off",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    camelcase: "off"
  }
};
