const express = require('express')
const { randomPhraseSeven, randomPhrase, collectionPhrase } = require('./controller')

const routes = express.Router()

routes.post('/', collectionPhrase)
routes.get('/phrases/random', randomPhrase)
routes.get('/phrases/seven', randomPhraseSeven)

module.exports = routes
