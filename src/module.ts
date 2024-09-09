import { defineNuxtModule, addServerHandler, createResolver } from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  apiKey: string
}

// Define the structure of the runtime config
interface RuntimeConfig {
  loops?: {
    apiKey?: string
  }
}
export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-loops',
    configKey: 'loops',
  },
  defaults: {
    apiKey: '',
  },
  setup(_options, _nuxt) {
    if (!_options.apiKey) {
      throw new Error('Loops API key is required')
    }

    const resolver = createResolver(import.meta.url)

    // Add server-side plugin
    addServerHandler({
      handler: resolver.resolve('./runtime/loops'),
      middleware: true,
    });

    // Merge user config with default config
    (_nuxt.options.runtimeConfig as RuntimeConfig).loops = defu(
      (_nuxt.options.runtimeConfig as RuntimeConfig).loops,
      {
        apiKey: _options.apiKey,
      },
    )
  },
})
