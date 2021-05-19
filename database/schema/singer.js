const mongoose = require('mongoose')
const Schema = mongoose.Schema

const singerSchema = new Schema({
  id: { unique: true, type: Number },
  title: { type: String },
  list: [{
    id: { type: Number },
    mid: { type: String },
    name: { type: String },
    pic: { type: String }
  }]
})
mongoose.model("Singers", singerSchema)
