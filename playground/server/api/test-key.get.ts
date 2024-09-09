export default defineEventHandler(async (event) => {
  const { loops } = event.context

  const response = await loops.testApiKey()
  return response
})
