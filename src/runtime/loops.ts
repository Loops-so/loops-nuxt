import { defineEventHandler } from 'h3'
import { LoopsClient } from 'loops'
import { useRuntimeConfig } from '#imports'

let loops: LoopsClient | null = null

export default defineEventHandler((event) => {
  if (!loops) {
    const config = useRuntimeConfig()
    loops = new LoopsClient(config.loops.apiKey)
  }

  event.context.loops = loops
})
