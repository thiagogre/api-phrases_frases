const Phrase = require('./models/Phrase')
const randomN = require('./utils/random_number')
const pullPhrases = require('./scraping')

const randomPhrase = async (req, res) => {
  const phrase = await Phrase.find({}, { __v: 0, _id: 0, id: 0 })
  const randomPhrase = phrase[Math.floor(Math.random() * phrase.length)]
  return res.json(randomPhrase)
}

const randomPhraseSeven = async (req, res) => {
  const phrase = await Phrase.find({}, { __v: 0, _id: 0, id: 0 })
  const randomPhraseSeven = randomN(phrase, 7)
  return res.json(randomPhraseSeven)
}

const collectionPhrase = async (req, res) => {
  const collectionPhrase = await Phrase.find({})
  if (collectionPhrase.length === 0) {
    const writtenDataBase = await pullPhrases()
    return res.json({
      message: 'Success',
      body: `Written ${writtenDataBase.length} phrases to DataBase`,
      statusCode: 201
    }).status(201)
  }
  return res.json({
    message: 'Success',
    statusCode: 200
  })
}

module.exports = {
  randomPhrase,
  randomPhraseSeven,
  collectionPhrase
}
