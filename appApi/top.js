/*
 * @Author: jiaxinying
 * @Date: 2021-05-19 14:45:45
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2021-05-19 15:50:05
 * 获取排行
 */

const router = require('koa-router')()
const mongoose = require('mongoose')
router.get('/getTopList', async (ctx, next) => {
  try {
    // 排行
    const Tops = mongoose.model('Tops')
    let topList = await Tops.find().exec()
    ctx.body = {
      code: 0,
      result: {
        topList
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



