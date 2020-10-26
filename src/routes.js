const express = require('express')
const { randomPhrase, collectionPhrase, allPhrases } = require('./controller')

const routes = express.Router()

routes.post('/', collectionPhrase)
routes.get('/', allPhrases)
routes.get('/random', randomPhrase)

module.exports = routes
