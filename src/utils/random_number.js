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

module.exports = randomN
