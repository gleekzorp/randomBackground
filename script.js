function randomHex() {
    var hex = [];
    const combo = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < 7; i++) {
      
      let randomThing = Math.floor(Math.random() * combo.length)
      
      hex.push(combo[randomThing])
      
    }
    return hex.join('')
}
randomHex()