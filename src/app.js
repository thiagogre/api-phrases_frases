const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()

dotenv.config()
const name = process.env.DB_NAME
const pass = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://dev:${pass}@developer.kuj4m.gcp.mongodb.net/${name}?retryWrites=true&w=majority`, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connection Done")
}).catch((err) => {
  console.log(err)
})

app.use(express.json())
app.use(routes)
app.listen(3000, () => console.log(`listening on 3000`))