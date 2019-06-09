function myFunction() {
    document.body.style.background = randomHex();
    document.getElementById('hex-text').innerText = randomHex();
}

function randomHex() {
    var hex = [];
    const combo = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    for (let i = 0; i < 6; i++) {
        
        let randomThing = Math.floor(Math.random() * combo.length)
        
        hex.push(combo[randomThing])
    }
        console.log(`"#${hex.join('')}"`);
        return `#${hex.join('')}`
  }