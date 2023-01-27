function luigi_game () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    controller.moveSprite(Mario, controller.dx(), controller.dx())
    story.printText("Do you want to play a game?", 80, 60)
    story.showPlayerChoices("Sure!", "No Thank You")
})
// Don't forget to comment your code as you work!
let Mario: Sprite = null
Mario = sprites.create(assets.image`mario`, SpriteKind.Player)
let Luigi = sprites.create(assets.image`myImage`, SpriteKind.Food)
let yoshi = sprites.create(assets.image`myImage0`, SpriteKind.Food)
controller.moveSprite(Mario, 100, controller.dx())
scene.setBackgroundImage(assets.image`myImage1`)
Mario.setPosition(78, 91)
Luigi.setPosition(130, 91)
yoshi.setPosition(32, 91)
