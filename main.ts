input.onButtonPressed(Button.A, function () {
    aantal_mensen += -1
})
input.onButtonPressed(Button.B, function () {
    aantal_mensen += 1
})
let aantal_mensen = 0
basic.forever(function () {
    basic.showNumber(aantal_mensen)
})
