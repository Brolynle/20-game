player = 0
computer = 0

do {
    alert("The point of this game is to draw random numbers from 1 to 10, to see who gets closer to 20.")

    do {
    var numran = Math.floor(Math.random() * 10)
    alert(`Ok, my number is ${numran}`)
    } while(computer >= 16)

} while((computer < 20) && (player ))