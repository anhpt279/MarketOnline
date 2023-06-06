module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    semi: [2, "always"],
    "no-use-before-define": [0],
    camelcase: [0],
    "default-param-last": [0],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": [0],
        "@typescript-eslint/no-explicit-any": [0],
        "@typescript-eslint/no-empty-function": [0],
        "@typescript-eslint/no-empty-interface": [0],
        "@typescript-eslint/no-var-requires": [0],
        "@typescript-eslint/ban-types": [0],
        "react/prop-types": [0],
        "react/display-name": [0],
        "no-template-curly-in-string": "off",
        "react/react-in-jsx-scope": "off",
        "no-console": "off",
      },
    },
  ],
};
