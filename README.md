# Loops Nuxt Module

This Nuxt module makes it easy to add the Loops [JavaScript SDK](/sdks/javascript) to your Nuxt project.

## Installation

You can install the package [from npm](https://www.npmjs.com/package/nuxt-loops):

```bash
npm install nuxt-loops
```

You will need a Loops API key to use the module.

In your Loops account, go to the [API Settings page](https://app.loops.so/settings?page=api) and click **Generate key**.

Copy this key and save it in your application code (for example as `LOOPS_API_KEY` in an `.env` file).

Then add `nuxt-loops` to your modules list and add a reference to your API key:

```js nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-loops'],
  loops: {
    apiKey: process.env.LOOPS_API_KEY
  }
});
```

## Usage

To use the module, import `loops` from the request context.

Then call one of the SDK methods. Read through the [JS SDK docs](https://loops.so/docs/sdks/javascript#methods) for more details.

```javascript
export default defineEventHandler(async (event) => {
  const { loops } = event.context;

  const response = await loops.updateContact("hello@gmail.com", {
    firstName: "Bri",
    lastName: "Chambers",
  })
});
```

See the API documentation to learn more about [rate limiting](https://loops.so/docs/api-reference#rate-limiting) and [error handling](/api-reference#debugging).