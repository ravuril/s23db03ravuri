const mongoose = require("mongoose")
const CarSchema = mongoose.Schema({
    Car_color:{
        type: String,
        required: true,
        match:/^[a-zA-Z]+$/
    },
    Car_model: String,
    Car_Title:String,
    Car_mileage: Number,
    Car_cost:{
        type:Number,
        min:1,
        max:1200000
    }
})

module.exports = mongoose.model("Car", CarSchema)

