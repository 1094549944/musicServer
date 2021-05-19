/*
 * @Author: jiaxinying
 * @Date: 2021-05-19 14:45:45
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2021-05-19 15:07:45
 * 获取首页推荐接口
 */

const router = require('koa-router')()
const mongoose = require('mongoose')
router.get('/getRecommend', async (ctx, next) => {

  try {


    // 获取推荐歌单推荐
    // 获取推荐banner
    const Banner = mongoose.model('RecommendBanner')
    const Alums = mongoose.model('RecommendAlbums')

    let resultBanner = await Banner.find().exec();
    let resultAlums = await Alums.find().exec();
    console.log("resultBanner", resultBanner)
    ctx.body = {
      code: 0,
      result: {
        albums: resultAlums,
        sliders: resultBanner
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



