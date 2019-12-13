controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    rocky.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    randomSprite.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
let rocky: Sprite = null
let randomSprite: Sprite = null
randomSprite = sprites.create(img`
. f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f . . 
. f f f 7 7 7 7 7 7 7 f f f . . 
. f f f 7 f 7 7 7 f 7 f f f . . 
. . f f 7 7 7 7 7 7 7 f f . . . 
. . f f 7 7 f f f 7 7 f f . . . 
. . . f 7 f f f f f 7 f . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
randomSprite.setPosition(81, 57)
rocky = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . b b b . . . . . . . 
. . . . b b b b b b b b . . . . 
. . . b b b b b b b b b b b . . 
. b b b b 1 1 b b 1 1 b b b b . 
. b b b b 1 f b b f 1 b b b b . 
. . b b b b b b b b b b b b b . 
. . b b b b b f f f b b b b b . 
. . . . b b f f f f f b b b . . 
. . . . b b 1 1 1 1 1 b b b . . 
. . . . . b 1 1 1 1 1 b b b . . 
. . . . . b b b b b b b b . . . 
. . . . . . b b b b b b b . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.splash("this is my rocky game")
