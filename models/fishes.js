const mongoose = require("mongoose")
const fishSchema = mongoose.Schema({
    fishname: {
        type: String,
        required: [true, "Fishname is Required"]
    },
    habitat: String,
    classification: String,
    price: {
        type: Number,
        required: [true,"Price of the fish is required"],
        min:[1000,"Price Should be minimum of 1000$ "],
        max:[5000,"Price Cannot be greater than 5000$ "]

    }
})
module.exports = mongoose.model("Fish", fishSchema)