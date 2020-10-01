const axios = require('axios')
const cheerio = require('cheerio')
const Phrase = require('./models/Phrase')

const pullPhrases = async () => {
  const res = await axios.get('https://www.aluralingua.com.br/artigos/principais-frases-usadas-no-cotidiano-em-ingles')
  let phrases = []
  const $ = cheerio.load(res.data)
  $('.cosmos-container > ul > li > p').each((id, element) => {
    const phrase = $(element).text()
    const phrasesEnglishAndPortuguese = phrase.includes('-') ? phrase.split('-'):phrase.split('–')
    phrases.push({id, phrase: phrasesEnglishAndPortuguese[0], frase: phrasesEnglishAndPortuguese[1]})
  })
  Phrase.create(phrases)
}

module.exports = pullPhrases