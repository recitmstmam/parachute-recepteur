input.onButtonPressed(Button.A, function () {
    radio.sendString("go")
    basic.pause(100)
    control.reset()
})
radio.onReceivedValue(function (name, value) {
    if (name == "y") {
        acc_y = Math.abs(value)
    }
})
let acc_y = 0
radio.setGroup(1)
acc_y = 0
basic.forever(function () {
    serial.writeValue("acc", Math.abs(acc_y * 9.81 / 1024 - 9.81))
    serial.writeLine("" + (input.runningTime() / 1000))
    led.toggle(0, 0)
    basic.pause(10)
})
