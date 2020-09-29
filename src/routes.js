const express = require('express')
const pullPhrases = require('./scraping')
const Phrase = require('./models/Phrase')
const { randomPhraseSeven, randomPhrase } = require('./controller')

const routes = express.Router()

routes.get('/', async (req, res) => {
  const collection_phrase = await Phrase.find({})
  if (collection_phrase.length === 0) {
    await pullPhrases()
    console.log('phrases written to db')
}
  res.send(`/phrases/random or /phrases/seven\n\n\nPhrases from: https://www.aluralingua.com.br/artigos/principais-frases-usadas-no-cotidiano-em-ingles`)
})

routes.get('/phrases/random', randomPhrase)
routes.get('/phrases/seven', randomPhraseSeven)

module.exports = routes
