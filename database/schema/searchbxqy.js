const mongoose = require('mongoose')
const Schema = mongoose.Schema
const searchbxqySchema = new Schema({
  id: { unique: true, type: Number },
  mid: { type: String },
  value: { type: String },
  name: { type: String },
  singer: { type: String },
  url: { type: String },
  duration: { type: String },
  pic: { type: String },
  album: { type: String },
})
mongoose.model("SearchBXQYSchema", searchbxqySchema)