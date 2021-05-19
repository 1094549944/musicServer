const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recomBannerSchema = new Schema({
  id: { unique: true, type: String },
  pic: { type: String },
  link: { type: String }
})
mongoose.model("RecommendBanner", recomBannerSchema)