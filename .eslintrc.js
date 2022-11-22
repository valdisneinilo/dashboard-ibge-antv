module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["react-app", "plugin:@typescript-eslint/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["prettier", "react", "import", "jsx-a11y"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        singleQuote: false,
        semi: true,
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "no-console": 1,
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
};
