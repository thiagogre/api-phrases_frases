const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const pullPhrases = async () => {
    const res = await axios.get('https://www.aluralingua.com.br/artigos/principais-frases-usadas-no-cotidiano-em-ingles')
    let phrases = []
    const $ = cheerio.load(res.data)
    $('.cosmos-container > ul > li > p').each((index, element) => {
        const phrase = $(element).text()
        phrases[index] = {"id":index, phrase}
    })

    const store_items = phrases.map(phrase => (phrase['phrase']))
    const refactor_store_items = store_items.map(item => item.includes('-') ? item.split('-'):item.split('–'))
    phrases.forEach((phrase, index) => {
        phrase['phrase'] = refactor_store_items[index][0].substring(0, refactor_store_items[index][0].length - 1)
        phrase['frase'] = refactor_store_items[index][1].substring(1)
    })
    // let n = 0
    // for (i of phrases) {
        
        
    //     n += 1
    // }

    fs.writeFile("data.json", JSON.stringify(phrases, null, 2), (err) => {
        if(err) throw err
    })
}

module.exports = pullPhrases