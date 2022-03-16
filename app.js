player = 0
computer = 0

do {
    alert("The point of this game is to draw random numbers from 1 to 10, to see who gets closer to 20.")

    do {
    var numran = Math.floor(Math.random() * 10)
    computer ++
    alert(`Ok, my number is ${numran} and my total is ${computer}`)
    } while(computer >= 16)

    do {
    var drawnum = prompt("Do you want to draw a number? If so enter `y`")
        if (drawnum = "y") {
            var numran = Math.floor(Math.random() * 10)
            player ++
            alert(`Your number is ${numran} and your total is ${player}`)
            break;
    }
    } while(player < 20)

} while((computer > 20) || (player > 20))

if (player > 20) {
    alert("Sorry, you lose!")
}

if (computer > 20) {
    alert("Good job, you won!")
}