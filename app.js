player = 0
computer = 0

do {
    alert("The point of this game is to draw random numbers from 1 to 10, to see who gets closer to 20.")

    do {
    var numran = Math.floor(Math.random() * 10)
    alert(`Ok, my number is ${numran}`)
    } while(computer >= 16)

    do {
    var choosenum = prompt("Now, you choose a number.")
    } while(player < 20)

    if (choosenum < 16) 
    {alert("Ok, now it's the computer's turn.") }

} while((computer > 20) || (player > 20))

if (player > 20) {
    alert("Sorry, you lose!")
}

if (computer > 20) {
    alert("Good job, you won!")
}