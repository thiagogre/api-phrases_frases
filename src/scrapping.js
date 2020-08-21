const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://www.englishexperts.com.br/forum/60-frases-em-ingles-para-iniciantes-com-traducao-t63687.html').then((res) => {
    const phrases = []
    const frases = []
    const $ = cheerio.load(res.data)
    $('.text-strong').each((index, element) => {
        const phrase = $(element).text()
        phrases[index] = {phrase}
    })
    
    $('.text-italics').each((index, element) => {
        const frase = $(element).text()
        frases[index] = {frase}
    })
    var arraySUM = phrases.concat(frases)
    console.log(arraySUM);
})