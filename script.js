function myFunction() {
    var hexadecimal = randomHex()
    document.body.style.background = hexadecimal;
    document.getElementById('hex-text').innerText = hexadecimal;
}

function randomHex() {
    var hex = [];
    const hexList = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    for (let i = 0; i < 6; i++) {        
        hex.push(hexList[Math.floor(Math.random() * hexList.length)])
    }
        return `#${hex.join('')}`
  }