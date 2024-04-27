import { k } from "../game.js"

import "./Test2.js"

k.scene("test1", async () => {
  k.loadSprite("bread", "sprites/BernddasBrot.png")
  k.loadSprite("bakery", "sprites/bakery.png")
  k.loadSprite("ground", "sprites/ground.png")

  const BGtest = k.add([
    k.sprite("bakery"),
    k.pos(400, 250),
    k.area(),
    k.anchor("center"),
  ])

  const Bernd = k.add([
    k.sprite("bread"),

    k.pos(550, 200),
    k.anchor("center"),
    k.area(),
  ])

  Bernd.onHover(() => {
    Bernd.color = k.rgb(255, 0, 0)
  })

  Bernd.onHoverEnd(() => {
    Bernd.color = k.rgb(255, 255, 255)
  })

  Bernd.onClick(() => {
    k.go("Test2")
  })
})
