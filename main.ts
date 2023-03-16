input.onButtonPressed(Button.A, function () {
    gauche.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    gauche.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
    gauche.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    gauche.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
    strip.clear()
})
input.onButtonPressed(Button.AB, function () {
    stop.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(2000)
    stop.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    droite.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    droite.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
    droite.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    droite.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
    strip.clear()
})
let stop: neopixel.Strip = null
let droite: neopixel.Strip = null
let gauche: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
gauche = strip.range(0, 2)
droite = strip.range(3, 2)
stop = strip.range(0, 5)
basic.forever(function () {
	
})
