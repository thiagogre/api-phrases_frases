const phrases = require('../data.json')
const randomN = require('./utils/random_number')

const random_phrase = (req, res) => {
  const random_phrase = phrases[Math.floor(Math.random() * phrases.length)]
  res.json(random_phrase)
}

const random_phrase_seven = (req, res) => {
    const random_phrase_seven = randomN(phrases, 7)
    res.json(random_phrase_seven)
}

module.exports = { 
    random_phrase,
    random_phrase_seven
}
