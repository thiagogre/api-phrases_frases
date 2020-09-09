const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const app = express()

const name = process.env.DB_NAME
const password = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://dev:${password}@developer.kuj4m.gcp.mongodb.net/${name}?retryWrites=true&w=majority`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection succeed")
}).catch((err) => {
    console.log(err)
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)
app.listen(3000, () => console.log(`listening on 3000`))