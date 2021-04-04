const mongoose = require("mongoose")
const fishSchema = mongoose.Schema({
fishname: String,
habitat: String,
classification: String,
price: Number
})
module.exports = mongoose.model("Fish", fishSchema)