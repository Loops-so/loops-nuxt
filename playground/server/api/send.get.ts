export default defineEventHandler(async (event) => {
  const { loops } = event.context

  const response = await loops.getCustomFields()
  console.log(response)
})
