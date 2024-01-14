const conventional = require("@commitlint/config-conventional");

module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["commitlint-plugin-function-rules"],
  helpUrl: "https://github.com/1111mp/blankui",
  rules: {
    ...conventional.rules,
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "feature",
        "fix",
        "refactor",
        "docs",
        "build",
        "test",
        "ci",
        "chore",
      ],
    ],
    "function-rules/header-max-length": [0],
  },
};
