const express = require('express')
const { randomPhrase, randomTen, phraseByType } = require('./controller')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/', (req, res) => {
  res.send('Try /random_phrase, /random_ten, /phrases/random, or /phrases/ten')
})

app.get('/random_phrase', (req, res) => {
  res.json(randomPhrase())
})

app.get('/random_ten', (req, res) => {
  res.json(randomTen())
})

app.get('/phrases/random', (req, res) => {
  res.json(randomPhrase())
})

app.get('/phrases/ten', (req, res) => {
  res.json(randomTen())
})

app.get('/phrases/:type/random', (req, res) => {
  res.json(phraseByType(req.params.type, 1))
})

app.get('/phrases/:type/ten', (req, res) => {
  res.json(phraseByType(req.params.type, 10))
})

app.listen(3000, () => console.log(`listening on 3000`))