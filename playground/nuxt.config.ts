export default defineNuxtConfig({
  modules: ['../src/module'],
  loops: {
    apiKey: process.env.LOOPS_API_KEY,
  },
  devtools: { enabled: true },
})
