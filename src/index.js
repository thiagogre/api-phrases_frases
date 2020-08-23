const express = require('express')
const { randomPhrase, randomSeven } = require('./controller')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/', (req, res) => {
  res.send('Type /phrases/random, or /phrases/seven')
})

app.get('/phrases/random', (req, res) => {
  res.json(randomPhrase())
})

app.get('/phrases/seven', (req, res) => {
  res.json(randomSeven())
})

app.listen(3000, () => console.log(`listening on 3000`))