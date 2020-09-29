const Phrase = require('./models/Phrase')
const randomN = require('./utils/random_number')

const randomPhrase = async (req, res) => {
  const phrase = await Phrase.find({}, {__v:0,_id:0})
  const random_phrase = phrase[Math.floor(Math.random() * phrase.length)]
  res.json(random_phrase)
}

const randomPhraseSeven = async (req, res) => {
    const phrase = await Phrase.find({}, {__v:0,_id:0})
  const random_phrase_seven = randomN(phrase, 7)
  res.json(random_phrase_seven)
}

module.exports = { 
  randomPhrase,
  randomPhraseSeven
}
