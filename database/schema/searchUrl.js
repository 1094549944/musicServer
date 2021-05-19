const mongoose = require('mongoose')
const Schema = mongoose.Schema

const searchMidSchema = new Schema({
  mid: { unique: true, type: String },
  value: { type: String }
})
mongoose.model("SearchMidSchema", searchMidSchema)