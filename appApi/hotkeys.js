/*
 * @Author: jiaxinying 
 * @Date: 2021-05-19 16:00:01 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2021-05-19 16:00:47
 * 获取关键词
 */
const router = require('koa-router')()
const mongoose = require('mongoose')
router.get('/getHotKeys', async (ctx, next) => {
  try {
    // 关键字
    const HotKey = mongoose.model('HotKey')
    let hotKeys = await HotKey.find().exec()
    ctx.body = {
      code: 0,
      result: {
        hotKeys
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

