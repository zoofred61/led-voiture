function clignote_droite () {
    droite.showColor(neopixel.colors(NeoPixelColors.Orange))
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.pause(100)
    droite.showColor(neopixel.colors(NeoPixelColors.Black))
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(100)
}
function clignote_gauche () {
    gauche.showColor(neopixel.colors(NeoPixelColors.Orange))
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.pause(100)
    gauche.showColor(neopixel.colors(NeoPixelColors.Black))
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(100)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        clignote_gauche()
    }
})
input.onButtonPressed(Button.AB, function () {
    stop.showColor(neopixel.colors(NeoPixelColors.Red))
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 3000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    stop.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        clignote_droite()
    }
})
let stop: neopixel.Strip = null
let droite: neopixel.Strip = null
let gauche: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
gauche = strip.range(0, 2)
droite = strip.range(3, 2)
stop = strip.range(0, 5)
basic.forever(function () {
	
})
