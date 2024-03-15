1. `npm create vite@latest my-app -- --template react-ts`
2. `cd my-app`
3. `npm install`
4. `npm install --save-dev @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint-plugin-react@latest eslint-plugin-react-hooks@latest eslint-plugin-react-refresh@latest`
5. Update the `.eslintrc.cjs` file with the following content:
```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'prettier', '@typescript-eslint', 'react'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
```
6. `npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier`
7. Create a `.prettierrc` file in the root of the project with the following content:
```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2
}
```
8. Update the `package.json` file with the following content:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint --ext .ts,.tsx src",
    "lint:fix": "eslint --ext .ts,.tsx src --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx}\"",
    "preview": "vite preview"
  }
}
```