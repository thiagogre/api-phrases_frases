const phrases = require('../data/phrases.json')

const randomPhrase = () => {
  return phrases[Math.floor(Math.random() * phrases.length)]
}

const randomN = (phraseArray, n) => {
  const limit = phraseArray.length < n ? phraseArray.length : n
  const randomIndicesSet = new Set()

  while (randomIndicesSet.size < limit) {
    const randomIndex = Math.floor(Math.random() * phraseArray.length)
    if (!randomIndicesSet.has(randomIndex)) {
      randomIndicesSet.add(randomIndex)
    }
  }

  return Array.from(randomIndicesSet).map(randomIndex => {
    return phraseArray[randomIndex]
  })
}

const randomTen = () => randomN(phrases, 10)

const phraseByType = (type, n) => {
  return randomN(phrases.filter(phrase => phrase.type === type), n)
}

module.exports = { 
    phrases,
    randomPhrase,
    randomN,
    randomTen,
    phraseByType
}
