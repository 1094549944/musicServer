/*
 * @Author: jiaxinying
 * @Date: 2021-05-19 15:15:14
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2021-05-19 15:23:00
   "id": 27,
    "pic": "http://y.gtimg.cn/music/photo_new/T003R300x300M0000028F1mF3xzdBP.jpg",
    "name": "新歌榜",
    "period": "2021-05-19",
    "songList": [
      {
        "id": 307167242,
        "singerName": "任然",
        "songName": "落海"
      },
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const topSchema = new Schema({
  id: { unique: true, type: Number },
  pic: { type: String },
  name: { type: String },
  period: { type: String },
  songList: [
    {
      id: { type: Number },
      singerName: { type: String },
      songName: { type: String }
    }
  ]

})
mongoose.model("Tops", topSchema)
