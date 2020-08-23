const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const pullPhrases = () => {
    axios.get('https://www.aluralingua.com.br/artigos/principais-frases-usadas-no-cotidiano-em-ingles').then((res) => {
        let phrases = []
        const $ = cheerio.load(res.data)
        $('.cosmos-container > ul > li > p').each((index, element) => {
            const phrase = $(element).text()
            phrases[index] = {"id":index, phrase}
        })
        fs.writeFileSync("data.json", JSON.stringify(phrases, null, 2))
    })
}

module.exports = { pullPhrases }