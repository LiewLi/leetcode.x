module.exports = {
    "env": {
        "es6": true
    },
    "extends": ["google", "prettier"],
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": "error",
        "no-var": "off",
        "no-unused-vars": "off",
        "require-jsdoc": "off",
        "valid-jsdoc": "off"
    }
};