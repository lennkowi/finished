input.onButtonPressed(Button.A, function () {
    led.plot(1, 1)
    basic.pause(500)
    led.plot(3, 1)
    basic.pause(500)
    led.plot(0, 4)
    basic.pause(500)
    led.plot(1, 3)
    basic.pause(500)
    led.plot(2, 3)
    basic.pause(500)
    led.plot(3, 3)
    basic.pause(500)
    led.plot(4, 4)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("I Am Not Your Toy!")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.showString("Du bist so toll, sogar mein Essen kommt hoch, um dich zu sehen...KOTZ")
