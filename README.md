# React + TypeScript + Vite

Part of this project follows the tutorial on <https://www.youtube.com/watch?v=SqcY0GlETPk>.  The project also includes additional work to show unit testing and uses GitHub Actions for continuous integration.

## Overview

This is a tutorial for single client side react app built with vite.

### Project Structure

#### Package Manager

The Nodejs Package Manager (npm) is used to manage the production and development dependencies.  See <https://www.npmjs.com/> for more details on npm.

#### Build System

The Vite build tool helps to package the source code and package it for a production release.  It is also used to help with development and testing.  See <https://vitejs.dev/guide/> for more details on Vite.

## Setup

Install [React Developer Tools](https://react.dev/learn/react-developer-tools).

Install nodejs > 20.x <https://nodejs.org/en>.

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

## Building

```bash
npm run build
```

## Development Environment

```bash
npm run dev
```

<!-- 
Information about the template

## Template Details

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

<!--
Followed advice below on additional linting

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
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->
