input.onButtonPressed(Button.A, function () {
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # # .
            . # . . .
            . # # # .
            `)
    }
    basic.pause(200)
})
basic.showString("Hey !")
loops.everyInterval(60000, function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(200)
})
