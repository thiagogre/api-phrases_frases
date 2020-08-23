const express = require('express')
const pullPhrases = require('./scraping')
const { randomSeven, randomPhrase } = require('./controller')

const routes = express.Router()

routes.get('/', async (req, res) => {
    await pullPhrases()
    res.send('Type /phrases/random, or /phrases/seven')
})

routes.get('/phrases/random', randomPhrase)
routes.get('/phrases/seven', randomSeven)

module.exports = routes
