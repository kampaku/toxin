module.exports = {
  customSyntax: "postcss-scss",
  extends: [
            "stylelint-config-rational-order",
            "stylelint-prettier/recommended"
  ],
  plugins: ["stylelint-order", "stylelint-config-rational-order/plugin", "stylelint-scss"],
};