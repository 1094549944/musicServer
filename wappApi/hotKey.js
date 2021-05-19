/*
 * @Author: jiaxinying 
 * @Date: 2021-05-19 11:55:49 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2021-05-19 15:58:29
 * 写入关键词
 */
const router = require('koa-router')()
const mongoose = require("mongoose")
const fs = require('fs')
router.prefix('/wHotKey')
// 关键词
router.get('/insertHotKey', async (ctx) => {
  fs.readFile('data_json/hotKey.json', 'utf8', (err, data) => {
    if (!data) {
      console.log("has no data")
    }
    data = JSON.parse(data)
    let saveCount = 0
    const HotKey = mongoose.model('HotKey')
    data.map((value, index) => {
      console.log(value)
      let newHotKey = new HotKey(value)
      newHotKey.save().then(() => {
        saveCount++
        console.log('关键词' + saveCount)
      }).catch(error => {
        console.log(error)
      })
    })
  })
  ctx.body = "开始关键词导入数据"
})


module.exports = router