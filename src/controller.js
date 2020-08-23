const phrases = require('../data.json')
const randomN = require('./utils/randomNumber')

const randomPhrase = (req, res) => {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
  res.json(randomPhrase)
}

const randomSeven = (req, res) => {
    const randomSeven = randomN(phrases, 7)
    res.json(randomSeven)
}

module.exports = { 
    randomPhrase,
    randomSeven
}
