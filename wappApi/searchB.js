/*
 * @Author: jiaxinying 
 * @Date: 2021-05-19 11:55:49 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2021-05-19 16:28:56
 * 写入搜索冰雪奇缘2
 */
const router = require('koa-router')()
const mongoose = require("mongoose")
const fs = require('fs')
router.prefix('/wsearchB')
// 搜索冰雪奇缘2
router.get('/insertsearchB', async (ctx) => {
  fs.readFile('data_json/searchBXQY.json', 'utf8', (err, data) => {
    if (!data) {
      console.log("has no data")
    }
    data = JSON.parse(data)
    let saveCount = 0
    const searchB = mongoose.model('SearchBXQYSchema')
    data.map((value, index) => {
      console.log(value)
      let newsearchB = new searchB(value)
      newsearchB.save().then(() => {
        saveCount++
        console.log('搜索冰雪奇缘2' + saveCount)
      }).catch(error => {
        console.log(error)
      })
    })
  })
  ctx.body = "开始搜索冰雪奇缘2导入数据"
})


module.exports = router