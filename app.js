const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const { connect, initSchemas } = require('./database/init.js')
const mongoose = require('mongoose')

const index = require('./routes/index')
const users = require('./routes/users')
const wRecommandApi = require('./wappApi/recom') // 写入推荐
const wSingersApi = require('./wappApi/singer') // 写入歌手
const wTopApi = require('./wappApi/top') // 写入排行
const wHotKeyApi = require('./wappApi/hotKey') // 写入关键词
const wSearchBApi = require('./wappApi/searchB') // 写入搜索冰雪奇缘2mid
const wSearchMidApi = require('./wappApi/searchMid') // 写入搜索冰雪奇缘2mid

const recommendApi = require('./appApi/recommend') // 推荐列表
const singersApi = require('./appApi/singers') // 歌手
const topApi = require('./appApi/top') // 排行
const hotKeyApi = require('./appApi/hotkeys') // 关键字
const searchApi = require('./appApi/search')
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(wRecommandApi.routes(), wRecommandApi.allowedMethods())
app.use(wSingersApi.routes(), wSingersApi.allowedMethods())
app.use(wTopApi.routes(), wTopApi.allowedMethods())
app.use(wHotKeyApi.routes(), wHotKeyApi.allowedMethods())
app.use(wSearchBApi.routes(), wSearchBApi.allowedMethods())
app.use(wSearchMidApi.routes(), wSearchMidApi.allowedMethods())
app.use(recommendApi.routes(), recommendApi.allowedMethods())
app.use(singersApi.routes(), singersApi.allowedMethods())
app.use(topApi.routes(), topApi.allowedMethods())
app.use(hotKeyApi.routes(), topApi.allowedMethods())
app.use(searchApi.routes(), searchApi.allowedMethods)
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
; (async () => {
  await connect()
  initSchemas()
})()
module.exports = app
