input.onButtonPressed(Button.A, function () {
    control.reset()
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        acc_x = value
    }
    if (name == "y") {
        acc_y = value
    }
    if (name == "z") {
        acc_z = value
    }
})
let acc_z = 0
let acc_y = 0
let acc_x = 0
acc_x = 0
acc_y = 0
acc_z = 0
radio.setGroup(1)
basic.pause(1000)
radio.sendString("go")
basic.forever(function () {
    serial.writeValue("acc", Math.sqrt(acc_x * acc_x + (acc_y * acc_y + acc_z * acc_z)) * 9.81 / 1024 - 9.81)
    serial.writeLine("" + (input.runningTime() / 1000))
    led.toggle(0, 0)
    basic.pause(100)
})
