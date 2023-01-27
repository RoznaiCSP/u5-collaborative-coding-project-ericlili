function luigi_and_yoshi_games () {
    story.showPlayerChoices("", "")
    return 0
}
// Don't forget to comment your code as you work!
let Mario = sprites.create(assets.image`mario`, SpriteKind.Player)
let Luigi = sprites.create(assets.image`myImage`, SpriteKind.Player)
let yoshi = sprites.create(assets.image`myImage0`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`myImage1`)
Mario.setPosition(78, 91)
Luigi.setPosition(130, 91)
yoshi.setPosition(32, 91)
Mario.x += controller.dx()
