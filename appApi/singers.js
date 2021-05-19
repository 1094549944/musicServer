/*
 * @Author: jiaxinying
 * @Date: 2021-05-19 14:45:45
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2021-05-19 15:10:26
 * 获取歌手
 */

const router = require('koa-router')()
const mongoose = require('mongoose')
router.get('/getSingerList', async (ctx, next) => {
  try {
    // 歌手
    const Singers = mongoose.model('Singers')
    let singers = await Singers.find().exec()
    ctx.body = {
      code: 0,
      result: {
        singers
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



