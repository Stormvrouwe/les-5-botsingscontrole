basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
