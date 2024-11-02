namespace SpriteKind {
    export const arrow = SpriteKind.create()
    export const Cursor = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . . . 2 . 
        . . 2 . . . . . . . . . . 2 . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . 2 . . . . . . 2 . . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . 2 . . . . . . . . . . . . 2 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Cursor)
    controller.moveSprite(mySprite, 0, 0)
    controller.moveSprite(mySprite2, 120, 120)
    mySprite.setImage(img`
        . f f . . . e e e e e . . . . . . 
        f f f f . . e d d d e . . . . . . 
        f f f f . . 1 8 d 8 1 . . . . . . 
        . f f d . . d d d d d . . . . . . 
        . . d d d . d f f f d . . . . . . 
        . . . d 6 6 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . 6 6 6 6 6 d d . . . . 
        . . . . . . 6 6 6 6 6 d d . . . . 
        . . . . . . 6 6 6 6 6 d d . . . . 
        . . . . . . 6 6 6 6 6 d d . . . . 
        . . . . . . a a a a a . . . . . . 
        . . . . . . a a a a a . . . . . . 
        . . . . . . a a c a a . . . . . . 
        . . . . . . a a c a a . . . . . . 
        . . . . . . a a c a a . . . . . . 
        . . . . . . b b c b b . . . . . . 
        `)
    pause(800)
    mySprite.setImage(img`
        . . . . . . e e e e e . . . . . . 
        . . . . . . e d d d e . . . . . . 
        . . . . . . 1 8 d 8 1 . . . . . . 
        . . . . . . d d d d d . . . . . . 
        . . . . . . d f f f d . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . . . d d 6 6 6 6 6 d d . . . . 
        . . . . d d 6 6 6 6 6 d d . . . . 
        . . . . d d 6 6 6 6 6 d d . . . . 
        . . . . d d 6 6 6 6 6 d d . . . . 
        . . . . . . a a a a a . . . . . . 
        . . . . . . a a a a a . . . . . . 
        . . . . . . a a c a a . . . . . . 
        . . . . . . a a c a a . . . . . . 
        . . . . . . a a c a a . . . . . . 
        . . . . . . b b c b b . . . . . . 
        `)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . d d d 5 . . . . 
        . . . . . . . d d . 2 4 . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 70, 70)
    projectile.follow(mySprite2)
    projectile.z = -1
    projectile.setKind(SpriteKind.arrow)
    pause(1000)
    sprites.destroy(mySprite2)
    controller.moveSprite(mySprite, 100, 100)
})
sprites.onOverlap(SpriteKind.arrow, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprite.setVelocity(0, 0)
    sprite.setImage(img`
        2 2 2 4 . . 2 2 2 2 2 2 2 . . . 
        . 2 2 4 2 2 4 4 4 4 4 4 4 2 2 . 
        . 2 4 4 4 4 2 2 2 4 4 4 4 4 2 2 
        . 2 2 2 4 4 4 4 4 4 4 4 4 4 2 2 
        . 4 4 4 4 4 4 5 5 4 5 4 4 2 2 . 
        . 2 4 4 4 4 5 5 5 5 5 5 4 4 2 . 
        2 4 4 4 4 5 5 5 5 5 5 5 4 2 2 2 
        2 4 4 4 4 4 5 5 5 5 5 4 4 4 2 2 
        . . 2 4 5 5 5 5 5 5 5 5 4 2 2 2 
        . 2 2 4 4 5 5 5 5 5 5 4 4 2 . . 
        . 2 2 4 4 4 4 5 5 5 5 4 2 . . . 
        2 2 2 4 4 4 4 4 5 5 4 4 2 . . . 
        2 2 2 4 4 4 4 4 4 4 4 4 2 . . . 
        . . 2 2 2 2 2 2 4 4 4 2 2 . . . 
        . . . . . . . . 2 2 2 2 2 . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        `)
    sprites.destroy(otherSprite)
    pause(100)
    sprites.destroy(sprite, effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . e e e e e . . . . . . 
    . . . . . . e d d d e . . . . . . 
    . . . . . . 1 8 d 8 1 . . . . . . 
    . . . . . . d d d d d . . . . . . 
    . . . . . . d f f f d . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . d 2 . d d 6 6 6 6 6 d d . . . . 
    . f f . d d 6 6 6 6 6 d d . . . . 
    f f f f d d 6 6 6 6 6 d d . . . . 
    f f f f d d 6 6 6 6 6 d d . . . . 
    . f f . . . a a a a a . . . . . . 
    . . . . . . a a a a a . . . . . . 
    . . . . . . a a c a a . . . . . . 
    . . . . . . a a c a a . . . . . . 
    . . . . . . a a c a a . . . . . . 
    . . . . . . b b c b b . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setPosition(80, 60)
mySprite.setStayInScreen(true)
info.setScore(0)
forever(function () {
    pause(1000)
    myEnemy = sprites.create(img`
        . . 6 6 6 6 6 6 6 6 . . 
        . . 6 f f 6 6 f f 6 . . 
        . . 6 f f 6 6 f f 6 . . 
        . . 6 6 6 f f 6 6 6 . . 
        . . 6 6 6 f f 6 6 6 . . 
        . . 6 f f 6 6 f f 6 . . 
        . . 6 f f 6 6 f f 6 . . 
        . . . f f 6 6 f f . . . 
        . . . 6 6 6 6 6 6 . . . 
        . . . 6 6 6 6 6 6 . . . 
        . . . 6 6 6 6 6 6 . . . 
        . . . 6 6 6 6 6 6 . . . 
        . . . 6 6 6 6 6 6 . . . 
        6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 . . . . 6 6 6 6 
        6 6 6 6 . . . . 6 6 6 6 
        `, SpriteKind.Enemy)
    myEnemy.setPosition(randint(0, 160), randint(0, 120))
    if (Math.percentChance(33)) {
        myEnemy.setImage(img`
            . . 6 6 6 6 6 6 6 6 . . 
            . . 6 f f 6 6 f f 6 . . 
            . . 6 f f 6 6 f f 6 . . 
            . . 6 6 6 f f 6 6 6 . . 
            . . 6 6 6 f f 6 6 6 . . 
            . . 6 f f 6 6 f f 6 . . 
            . . 6 f f 6 6 f f 6 . . 
            . . . f f 6 6 f f . . . 
            . . . 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 . . . 
            6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 . . . . 6 6 6 6 
            6 6 6 6 . . . . 6 6 6 6 
            `)
    } else if (Math.percentChance(33)) {
        myEnemy.setImage(img`
            . . . . . . 6 6 6 6 6 . . . . . . 
            . . . . . . 6 7 7 7 6 . . . . . . 
            . . . . . . f f 7 f f . . . . . . 
            . . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . . 7 f f f 7 . . . . . . 
            . . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . . . 7 7 6 6 6 6 6 7 7 . . . . 
            . . . . 7 7 6 6 6 6 6 7 7 . . . . 
            . . . . 7 7 6 6 6 6 6 7 7 . . . . 
            . . . . 7 7 6 6 6 6 6 7 7 . . . . 
            . . . . . . a a a a a . . . . . . 
            . . . . . . a a a a a . . . . . . 
            . . . . . . a a c a a . . . . . . 
            . . . . . . a a c a a . . . . . . 
            . . . . . . a a c a a . . . . . . 
            . . . . . . b b c b b . . . . . . 
            `)
    } else {
        myEnemy.setImage(img`
            . . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . f f 1 f f . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . 1 f f f 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 . . . 1 . . . 1 . . . . 
            . . . . 1 . 1 1 1 1 1 . 1 . . . . 
            . . . . 1 . . . 1 . . . 1 . . . . 
            . . . . 1 . 1 1 1 1 1 . 1 . . . . 
            . . . . 1 . . . 1 . . . 1 . . . . 
            . . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . 1 . . . 1 . . . . . . 
            . . . . . . 1 . . . 1 . . . . . . 
            . . . . . . 1 . . . 1 . . . . . . 
            . . . . . . 1 . . . 1 . . . . . . 
            . . . . . . 1 . . . 1 . . . . . . 
            `)
    }
})
