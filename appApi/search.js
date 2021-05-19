const router = require('koa-router')()
const mongoose = require('mongoose')
router.get('/search', async (ctx) => {
  console.log(ctx.query)
  try {
    let query = "冰雪奇缘2"
    let page = ctx.query.page;
    let num = 10;
    console.log("page", page)
    let showSinger = ctx.query.showSinger;
    let start = (page - 1) * num;
    // 搜索
    const searchList = mongoose.model('SearchBXQYSchema')
    let result = await searchList.find({}).skip(start).limit(num).exec()
    ctx.body = {
      code: 0,
      result: {
        songs: result
      }
    }
  } catch (error) {
    ctx.body = {
      code: 500,
      msg: "访问错误了"
    }
  }
})
module.exports = router