module.exports = {
  root: true,
  plugins: ["import"],
  extends: ["eslint:recommended", "plugin:import/recommended"],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "import/no-duplicates": 2,
    "import/no-unresolved": 0,
    "import/order": [
      1,
      {
        groups: [["builtin", "external"], ["index", "object", "unknown", "type"], "internal", ["parent", "sibling"]],
        pathGroups: [
          {
            pattern: "@web/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always",
        alphabetize: {order: "asc", caseInsensitive: true},
      },
    ],
    "prefer-const": 1,
    "no-console": [1, {allow: ["info", "warn", "error"]}],
    "no-constant-condition": [1, {checkLoops: false}],
    "no-control-regex": 0,
    "no-empty": [1, {allowEmptyCatch: true}],
    "no-loss-of-precision": 2,
    "no-promise-executor-return": 2,
    "no-unused-vars": [1, {args: "none"}],
    "sort-imports": [1, {ignoreDeclarationSort: true}],
  },
  overrides: [
    {
      files: ["**/*.tsx", "**/*.jsx"],
      plugins: ["react", "react-hooks"],
      extends: ["plugin:react/recommended", "plugin:react-hooks/recommended", "next", "next/core-web-vitals"],
      env: {
        browser: true,
        node: true,
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        "react/jsx-uses-react": 0,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
      },
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: "plugin:@typescript-eslint/recommended",
      rules: {
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-extra-semi": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-unused-vars": [1, {ignoreRestSiblings: true, args: "none"}],
        "@typescript-eslint/quotes": [1, "backtick"],
        "prefer-const": 1,
      },
    },
  ],
}
