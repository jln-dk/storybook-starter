# storybook-starter

**This is a minimalistic starter project for setting up a Storybook with React+TypeScript.**

The project uses the following tools:

- [Storybook](https://github.com/storybookjs/storybook)
- [React](https://github.com/facebook/react/)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [styled-components](https://github.com/styled-components/styled-components)
- [microbundle](https://github.com/developit/microbundle) (for producing esm, cjs, umd bundles)
- [source-map-explorer](https://github.com/danvk/source-map-explorer) (for analyzing your bundles)

This project aims to be always up-to-date with the latest versions of the tools.

## Scripts

`npm start` _or_ `npm run storybook`  
Both commands do the same: starts the Storybook locally on your machine.

`npm run build:bundle`  
Builds esm, cjs and umd bundles of your code using [microbundle](https://github.com/developit/microbundle).  
Please see the microbundle GitHub repository for more documentation.

`npm run build:storybook`  
Builds a static version of the Storybook website, ready to be deployed.

`npm run serve-storybook-static`  
Start a local [http-server](https://github.com/http-party/http-server) and serves the static Storybook website from your file system (make sure you have built it first).

`npm run analyze-bundle`  
Using [source-map-explorer](https://github.com/danvk/source-map-explorer) it helps you analyze and debug JavaScript (or Sass or LESS) code bloat through source maps.  
Please see source-map-explorer GitHub repository for more documentation.
