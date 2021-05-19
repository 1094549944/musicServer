const mongoose = require('mongoose')
const Schema = mongoose.Schema


const albumsSchema = new Schema({
  id: { unique: true, type: String },
  username: { type: String },
  title: { type: String },
  pic: { type: String },
})


mongoose.model("RecommendAlbums", albumsSchema)