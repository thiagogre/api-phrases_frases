const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(`mongodb+srv://dev:u6CeJtS6YL9czFFP@developer.kuj4m.gcp.mongodb.net/database?retryWrites=true&w=majority`, { 
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