const Phrase = require('./models/Phrase')
const randomN = require('./utils/random_number')

const random_phrase = async (req, res) => {
  const phrase = await Phrase.find({})
  const random_phrase = phrase[Math.floor(Math.random() * phrase.length)]
  res.json(random_phrase)
}

const random_phrase_seven = async (req, res) => {
    const phrase = await Phrase.find({})
    const random_phrase_seven = randomN(phrase, 7)
    res.json(random_phrase_seven)
}

module.exports = { 
    random_phrase,
    random_phrase_seven
}
