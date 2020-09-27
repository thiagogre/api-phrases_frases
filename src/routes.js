const express = require('express')
const pullPhrases = require('./scraping')
const { randomSeven, randomPhrase } = require('./controller')

const routes = express.Router()

routes.get('/', async (req, res) => {
    await pullPhrases()
    res.send(`/phrases/random or /phrases/seven\n\n\nPhrases from: https://www.aluralingua.com.br/artigos/principais-frases-usadas-no-cotidiano-em-ingles`)
})

routes.get('/phrases/random', randomPhrase)
routes.get('/phrases/seven', randomSeven)

module.exports = routes
