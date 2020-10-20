const Phrase = require('./models/Phrase')
const randomN = require('./utils/random_number')

const randomPhrase = async (req, res) => {
  const phrase = await Phrase.find({}, { __v: 0, _id: 0, id: 0 })
  const randomPhrase = phrase[Math.floor(Math.random() * phrase.length)]
  res.json(randomPhrase)
}

const randomPhraseSeven = async (req, res) => {
  const phrase = await Phrase.find({}, { __v: 0, _id: 0, id: 0 })
  const randomPhraseSeven = randomN(phrase, 7)
  res.json(randomPhraseSeven)
}

module.exports = {
  randomPhrase,
  randomPhraseSeven
}
