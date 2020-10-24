const Phrase = require('./models/Phrase')
const randomN = require('./utils/random_number')
const pullPhrases = require('./scraping')

const randomPhrase = async (req, res) => {
  try {
    const { quantity } = req.query
    const phrase = await Phrase.find({}, { __v: 0, _id: 0, id: 0 })

    if (quantity && isNaN(quantity)) {
      return res.json({
        message: 'Invalid, quantity should be a number',
        statusCode: '400'
      }).status(400)
    }

    if (quantity > phrase.length || quantity < 0) {
      return res.json({
        message: `Invalid, quantity should be between 0 and ${phrase.length}`,
        statusCode: '400'
      }).status(400)
    }

    const randomPhrase = randomN(phrase, quantity || 1)
    return res.json({
      body: randomPhrase,
      statusCode: '200'
    })
  } catch (error) {
    return res.json({
      error: error.message || error,
      statusCode: '500'
    }).status(500)
  }
}

const collectionPhrase = async (req, res) => {
  try {
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
  } catch (error) {
    return res.json({
      error: error.message || error,
      statusCode: 500
    }).status(500)
  }
}

module.exports = {
  randomPhrase,
  collectionPhrase
}
