# Fieldwork

Inspect your Sanity.io schema fields straight in your Studio using this tool

## Some use cases

- See what you've got in preparation for adding new schemas, so you can maximise re-use.

> This is a **Sanity Studio v3** plugin.

## Installation

```sh
npm install sanity-plugin-fieldwork
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import { defineConfig } from "sanity";
import { fieldwork } from "sanity-plugin-fieldwork";

export default defineConfig({
  //...
  plugins: [fieldwork({})],
});
```

## License

[MIT](LICENSE) © ahm digital

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.
