  
const mongoose = require('mongoose')

module.exports = mongoose.model("phrases", new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    phrases: {type: String, required: true},
}))