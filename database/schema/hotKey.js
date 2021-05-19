const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotKeySchema = new Schema({
  id: { unique: true, type: Number },
  key: { type: String }
})
mongoose.model("HotKey", hotKeySchema)