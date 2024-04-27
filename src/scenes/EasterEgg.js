import { k } from "../game.js"

import "./Shit.js"
import "./EasterEgg.js"

k.scene("EasterEgg", async () => {
  k.loadSprite("easterEgg", "sprites/egg.png")

  const BGtest = k.add([
    k.sprite("easterEgg"),
    k.pos(475, 350),
    k.area(),
    k.anchor("center"),
  ])

  const desc = k.add([
    k.text("Super Secret Easter Egg", { size: 32 }),
    k.pos(300, 50),
    k.area(),
    k.body(),
  ])
})
