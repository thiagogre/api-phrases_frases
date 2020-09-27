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

        let store_items = []
        let refactor_store_items = []
        phrases.map(phrase => {
            store_items.push(phrase['phrase'])
        })
        for (item of store_items) {
            if (item.includes('-')) {
                holder = item.split('-')
            } else {
                holder = item.split('–')
            }
            refactor_store_items.push(holder)
        }

        let n = 0
        for (i of phrases) {
            phrases[n]['phrase'] = refactor_store_items[n][0]
            phrases[n]['frase'] = refactor_store_items[n][1]
            n += 1
        }
        
        fs.writeFile("data.json", JSON.stringify(phrases, null, 2), (err) => {
            if(err) throw err
        })
    })
}

module.exports = pullPhrases