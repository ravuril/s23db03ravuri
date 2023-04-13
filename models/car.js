const mongoose = require("mongoose")
const CarSchema = mongoose.Schema({
    Car_color: String,
    Car_model: String,
    Car_Title: String,
    Car_mileage: Number,
    Car_cost:Number
})

module.exports = mongoose.model("Car", CarSchema)

