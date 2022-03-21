
player = 0
comtotal = 0

alert("The point of this game is to draw random numbers from 1 to 10, to see who gets closer to 20.")
alert("I'll go first.")

// do {
    do {
        var numran1 = Math.floor(Math.random() * 10 + 1)
        comtotal = comtotal + numran1 
        alert(`Ok, my number is ${numran1}. My total is now ${comtotal}.`)
    } while(comtotal < 16)

alert(`My total number was ${comtotal}.`)
    do {
    
        var numran2 = Math.floor(Math.random() * 10 + 1)
        player = player + numran2
        if (player > 20) {
            break
        }
        var drawnum = prompt(`Your starting number is ${numran2} and your total is ${player}.\n\nDo you want to draw a number? If so enter 'y'`)

    } while ((player < 20) && (drawnum == "y"))

    if (player > 20) {
        alert("Sorry, you lose!")
        // computer++
    }
    
    if (comtotal > 20) {
        alert("Good job, you won!")
        // player++
    }
    
// } while((computer < 20) || (player < 20))

if ((player > comtotal) && (comtotal <= 20) && (player <= 20)) {
    alert("Good job, you won!")
}

if ((player < comtotal) && (comtotal > 20) && (player <= 20)) {
    alert("Good job, you won!")
}

if ((player > comtotal) && (comtotal < 20) && (player >= 20)) {
    alert("You lose!")
}




