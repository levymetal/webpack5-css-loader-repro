# Webpack 5 storybook perf repro

Repro showing performance degradation on incremental rebuilds when using `storybook`. `main` branch is Webpack 5, `webpack4` branch is Webpack 4 with a virtually identical config. The diff can be seen here: https://github.com/levymetal/webpack5-css-loader-repro/pull/3/files

## Summary

When running `storybook` with Webpack 5, incremental builds take significantly longer than Webpack 4.

## Reproducing the issue

1. Clone the repo

```
git clone git@github.com:levymetal/webpack5-css-loader-repro.git
cd webpack5-css-loader-repro
```

2. Install packages

```
yarn install
```

3. Generate components

React Components are generated on demand to easily test large-scale changes (eg, css-in-js vs CSS Modules). By default, the script will generate 300 components to simulate a large-ish project.

```
yarn generate
```

4. Start the server

```
yarn start
```

5. Open one of the components and save the file. Observe the time it takes to rebuild and note which modules are recompiled.

6. Stop the webpack server, then start the storybook server

```
yarn storybook
```

7. Open one of the components and save the file. Observe all css is recompiled, causing a significantly longer rebuild.

8. Check out the `webpack4` branch

```
git switch webpack4
```

Repeat steps 4 to 7 and compare the result. Rebuilds are fast on both the webpack and storybook servers.
