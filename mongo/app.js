
const Koa = require('koa')
const path = require('path')
const views = require('koa-views')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const routers = require('./router/router')()

const port = '8080'

const app = new Koa()

app.use(static(
    path.join(__dirname, './assets')
))

app.use(views(path.join(__dirname, './views'), {
    map: { html: 'nunjucks' }
}))

app.use(bodyParser())

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(port)

console.log(`server is running at port ${port}`)
