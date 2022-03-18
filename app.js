
player = 0
computer = 0

alert("The point of this game is to draw random numbers from 1 to 10, to see who gets closer to 20.")
alert("I'll go first.")

do {
    do {
    var numran1 = Math.floor(Math.random() * 10 + 1)
    alert(`Ok, my number is ${numran1}`)
    comtotal = numran1 + numran1 
    } while(comtotal >= 16)

    do {
    var drawnum = prompt("Do you want to draw a number? If so enter `y`")
        if (drawnum = "y") {
            var numran2 = Math.floor(Math.random() * 10 + 1)
            playtotal = numran2 + numran2
            alert(`Your number is ${numran2} and your total is ${playtotal}`)
    }
    } while(player < 20)

    if (player > 20) {
        alert("Sorry, you lose!")
        computer++
    }
    
    if (computer > 20) {
        alert("Good job, you won!")
        player++
    }
    
} while((computer < 20) || (player < 20))




