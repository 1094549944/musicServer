/*
 * @Author: jiaxinying 
 * @Date: 2021-05-19 11:55:49 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2021-05-19 15:18:07
 * 排行
 */
const router = require('koa-router')()
const mongoose = require("mongoose")
const fs = require('fs')
router.prefix('/wTops')
// 排行
router.get('/insertTops', async (ctx) => {
  fs.readFile('data_json/topList.json', 'utf8', (err, data) => {
    if (!data) {
      console.log("has no data")
    }
    data = JSON.parse(data)
    let saveCount = 0
    const Tops = mongoose.model('Tops')
    data.map((value, index) => {
      console.log(value)
      let newTops = new Tops(value)
      newTops.save().then(() => {
        saveCount++
        console.log('排行' + saveCount)
      }).catch(error => {
        console.log(error)
      })
    })
  })
  ctx.body = "开始排行导入数据"
})


module.exports = router