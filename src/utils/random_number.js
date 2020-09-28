const randomN = (phrase_array, n) => {
    const limit = phrase_array.length < n ? phrase_array.length : n
    const randon_indices_set = new Set()
  
    while (randon_indices_set.size < limit) {
      const random_index = Math.floor(Math.random() * phrase_array.length)
      if (!randon_indices_set.has(random_index)) {
        randon_indices_set.add(random_index)
      }
    }
    return Array.from(randon_indices_set).map(random_index => {
      return phrase_array[random_index]
    })
}

module.exports = randomN