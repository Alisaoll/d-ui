const koa = require('koa')
const server = require('koa-static')
const app = koa()
app.use(server('.'))
app.listen(3000)