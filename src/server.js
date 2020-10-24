const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const server = express()

dotenv.config()
const name = process.env.DB_NAME
const pass = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://dev:${pass}@developer.kuj4m.gcp.mongodb.net/${name}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connection Done')
}).catch((err) => {
  console.log(err)
})

server.use(express.json())
.use(cors())
.use(routes)
.listen(process.env.PORT || 3000)
