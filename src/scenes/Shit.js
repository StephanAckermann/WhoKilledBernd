import { k } from "../game.js"

import "./intro.js"

k.scene("Shit", async () => {
  k.loadSprite("bread", "sprites/BernddasBrot.png")
  k.loadSprite("Shit", "sprites/Kackeposter.png")
  k.loadSprite("ground", "sprites/ground.png")
  k.loadSprite("Verdbread", "sprites/VerdauterBernd.png")
  k.loadSprite("Kacke", "sprites/Shit.png")

  const SPEED = 320

  const BGtest = k.add([
    k.sprite("Shit"),
    k.pos(475, 250),
    k.area(),
    k.anchor("center"),
  ])

  const BerndMove = k.add([
    k.sprite("Kacke"),
    k.pos(550, 200),
    k.area(),
    k.body(),
  ])

  const Retry = k.add([
    k.text("Retry", { size: 32 }),
    k.pos(50, 50),
    k.area(),
    k.body(),
  ])

  Retry.onClick(() => {
    k.go("intro")
  })

  k.onKeyDown("left", () => {
    // .move() is provided by pos() component, move by pixels per second
    BerndMove.move(-SPEED, 0)
  })

  k.onKeyDown("right", () => {
    // .move() is provided by pos() component, move by pixels per second
    BerndMove.move(SPEED, 0)
  })

  k.onKeyDown("up", () => {
    // .move() is provided by pos() component, move by pixels per second
    BerndMove.move(0, -SPEED)
  })

  k.onKeyDown("down", () => {
    // .move() is provided by pos() component, move by pixels per second
    BerndMove.move(0, SPEED)
  })
})
