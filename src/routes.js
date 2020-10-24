const express = require('express')
const { randomPhrase, collectionPhrase } = require('./controller')

const routes = express.Router()

routes.post('/', collectionPhrase)
routes.get('/random', randomPhrase)

module.exports = routes
