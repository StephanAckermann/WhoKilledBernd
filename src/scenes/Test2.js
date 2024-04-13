import { k } from "../game.js"

import "./test4.js"

k.scene("Test2", async () => {
  k.loadSprite("Bernd", "sprites/BernddasBrot.png")
  k.loadSprite("Mund", "sprites/MundOffen.png")
  k.loadSprite("Mund2", "sprites/MundZu.png")
  k.loadSprite("Croissant", "sprites/Croissant.png")
  k.loadSprite("Toast", "sprites/toast.png")

  const SPEED = 320

  const Question = k.add([
    k.text(
      "Die Verdauung beginnt mit der mechanischen Zerkleinerung" +
        "\n" +
        "der Nahrung durch die Zähne im Mund.",
    ),
    k.pos(50, 20),
  ])

  const Mitte = k.add([
    k.sprite("Bernd"),
    k.pos(190, 300),
    k.area(),
    k.anchor("center"),
    k.body(),
    "Target",
  ])

  const Mund = k.add([
    k.sprite("Mund"),
    k.pos(190, 300),
    k.area(),
    k.anchor("center"),
  ])

  const BerndMove = k.add([
    k.sprite("Bernd"),
    k.pos(550, 200),
    k.area(),
    k.body(),
  ])

  const Bread = k.add([k.sprite("Toast"), k.pos(400, 250), k.area(), k.body()])
  const Bread2 = k.add([
    k.sprite("Croissant"),
    k.pos(700, 300),
    k.area(),
    k.body(),
  ])

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

  BerndMove.onCollide("Target", () => {
    k.destroy(BerndMove)
    k.destroy(Mund)
    const Mund2 = k.add([
      k.sprite("Mund2"),
      k.pos(190, 300),
      k.area(),
      k.anchor("center"),
    ])
    Mund2.onClick(() => {
      k.go("test4")
    })
  })

  Bread.onCollide("Target", () => {
    k.destroy(Bread)
  })
  Bread2.onCollide("Target", () => {
    k.destroy(Bread2)
  })

  BerndMove.onHover(() => {
    k.debug.log("Probier die Pfeiltasten ;)")
  })
})
