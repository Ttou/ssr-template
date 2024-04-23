export default defineEventHandler(async event => {
  const body = await readBody(event)
  const { username, password } = body

  // 验证用户名和密码
  if (username === 'admin' && password === 'admin') {
    return 'mock token'
  }

  throw createError({
    status: 400,
    message: '账号或密码错误'
  })
})
