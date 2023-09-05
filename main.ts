let i = 0
loops.everyInterval(50, function () {
    i += 1
    basic.showNumber(i)
    basic.clearScreen()
})
basic.forever(function () {
    while (true) {
        basic.showString("Hello!")
        basic.pause(60000)
    }
})
