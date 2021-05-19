/*
 * @Author: jiaxinying 
 * @Date: 2021-05-19 11:55:49 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2021-05-19 14:25:45
 * 写入推荐热歌
 */
const router = require('koa-router')()
const mongoose = require("mongoose")
const fs = require('fs')
router.prefix('/wRecom')
// 热门歌单推荐
router.get('/insertAlbums', async (ctx) => {
  fs.readFile('data_json/recomAu.json', 'utf8', (err, data) => {
    if (!data) {
      console.log("has no data")
    }
    data = JSON.parse(data)
    let saveCount = 0
    const Albums = mongoose.model('RecommendAlbums')
    data.map((value, index) => {
      console.log(value)
      let newAlbums = new Albums(value)
      newAlbums.save().then(() => {
        saveCount++
        console.log('热门歌单推荐成功' + saveCount)
      }).catch(error => {
        console.log(error)
      })
    })
  })
  ctx.body = "开始导入数据"
})


router.get('/insertBanner', async (ctx) => {
  fs.readFile('data_json/recomBan.json', 'utf8', (err, data) => {
    if (!data) {
      console.log("has no data")
    }
    data = JSON.parse(data)
    let saveCount = 0
    const banner = mongoose.model('RecommendBanner')
    data.map((value, index) => {
      console.log(value)
      let newBanner = new banner(value)
      newBanner.save().then(() => {
        saveCount++
        console.log('首页歌单banner推荐成功' + saveCount)
      }).catch(error => {
        console.log(error)
      })
    })
  })
  ctx.body = "开始导入数据"
})




module.exports = router