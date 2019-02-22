# `cra-navi-hmr-demo`

This repo tries to demonstrate how `react-navi` can be used with Hot Module Reloading in a `create-react-app` based project.

Test with Node 10.14.2 and Yarn 1.13.0.

## Setup

For development:

```bash
$ yarn start
```

For the static export _and_ serving it:

```
$ yarn build && yarn serve
```

## Known bugs

### Hot Module Reloading doesn't work

I added HMR support with `react-app-rewire-hot-loader` to `create-react-app`. It seemed to work before I added `react-navi`, but now I only see full page refreshes on `$ yarn start` when I edit the content of `src/pages/Index.tsx` for example.

### `exports: { App }` throws on `$ yarn build`

When I try to use `exports: { App }` to statically export my `<Header/>` (see [this tweet](https://twitter.com/james_k_nelson/status/1098753411984515072)) the command `$ yarn build` fails. It works with `$ yarn start` or it works with `$ yarn build`, if I don't use `exports` here.

**Note**: JavaScript needs to be disabled, so you can see that `<Header/>` is not statically exported by default. It will be added at runtime, if JavaScript is enabled.
