input.onButtonPressed(Button.A, function () {
    control.reset()
})
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, (value * 9.81 / 1024 - 9.81) * -1)
    serial.writeLine("" + (input.runningTime() / 1000))
    led.toggle(0, 0)
})
radio.setGroup(1)
