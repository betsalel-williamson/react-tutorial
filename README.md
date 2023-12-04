# React + TypeScript + Vite

Part of this project follow the tutorial on <https://www.youtube.com/watch?v=SqcY0GlETPk>.  It is augmented to include unit testing and GitHub Actions for continuous integration.

## Setup

In browser install [React Developer Tools](https://react.dev/learn/react-developer-tools)

Install nodejs > 20.x <https://nodejs.org/en>

Install modules, build, and test:

```bash
npm install
npm run build
npm run test:unit
```

For interactive testing:

```bash
npm run test:ui
```

### Debugging

In VS Code, open a "JavaScript Debug Terminal".

Next, run the testing command inside the new terminal.

## Template Details

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
