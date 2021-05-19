/*
 * @Author: jiaxinying 
 * @Date: 2021-05-19 11:55:49 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2021-05-19 16:38:41
 * 写入搜索冰雪奇缘2mid
 */
const router = require('koa-router')()
const mongoose = require("mongoose")
const fs = require('fs')
router.prefix('/wsearchMid')
// 搜索冰雪奇缘2
router.get('/insertsearchMid', async (ctx) => {
  fs.readFile('data_json/searchMid.json', 'utf8', (err, data) => {
    if (!data) {
      console.log("has no data")
    }
    console.log("data****", data)
    data = JSON.parse(data)
    let saveCount = 0
    const searchMid = mongoose.model('SearchMidSchema')
    data.map((value, index) => {
      console.log(value)
      let newsearchMid = new searchMid(value)
      newsearchMid.save().then(() => {
        saveCount++
        console.log('搜索冰雪奇缘2' + saveCount)
      }).catch(error => {
        console.log(error)
      })
    })
  })
  ctx.body = "开始搜索冰雪奇缘2mid导入数据"
})


module.exports = router