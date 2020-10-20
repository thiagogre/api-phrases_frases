const mongoose = require('mongoose')

module.exports = mongoose.model('Phrase', new mongoose.Schema({
  id: Number,
  phrase: String,
  frase: String
}))
