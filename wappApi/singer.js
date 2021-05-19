/*
 * @Author: jiaxinying 
 * @Date: 2021-05-19 11:55:49 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2021-05-19 15:19:45
 * 写入歌手
 */
const router = require('koa-router')()
const mongoose = require("mongoose")
const fs = require('fs')
router.prefix('/wSingers')
// 歌手
router.get('/insertSingers', async (ctx) => {
  fs.readFile('data_json/singer.json', 'utf8', (err, data) => {
    if (!data) {
      console.log("has no data")
    }
    data = JSON.parse(data)
    let saveCount = 0
    const Singers = mongoose.model('Singers')
    data.map((value, index) => {
      console.log(value)
      let newSingers = new Singers(value)
      newSingers.save().then(() => {
        saveCount++
        console.log('歌手' + saveCount)
      }).catch(error => {
        console.log(error)
      })
    })
  })
  ctx.body = "开始歌手导入数据"
})


module.exports = router