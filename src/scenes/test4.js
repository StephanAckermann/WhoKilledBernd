import { k } from "../game.js"

import "./Test3.js"
import "./Test2.js"

k.scene("test4", async () => {
  k.loadSprite("Correct", "sprites/Amylasen_funktion.png")
  k.loadSprite("Enzyme", "sprites/Scissor.png")
  k.loadSprite("Zucker", "sprites/Zucker.jpg")
  k.loadSprite("Bernd", "sprites/BernddasBrot.png")

  const Question = k.add([
    k.text(
      "Welche Enzyme sind im Mund für die Verdauung von " +
        "\n" +
        "Stärke (pflanzliche Kohlenhydrate) verantwortlich?",
    ),
    k.pos(50, 20),
  ])

  const Amylase = k.add([
    k.sprite("Enzyme"),
    k.pos(150, 300),
    k.area(),
    k.anchor("center"),
  ])
  Amylase.color = k.rgb(255, 0, 0)
  const AmylaseDesc = k.add([k.text("Amylase"), k.pos(80, 450)])

  const Pepsin = k.add([
    k.sprite("Enzyme"),
    k.pos(450, 300),
    k.area(),
    k.anchor("center"),
  ])
  Pepsin.color = k.rgb(0, 255, 0)
  const PepsinDesc = k.add([k.text("Pepsin"), k.pos(400, 450)])

  const Lipase = k.add([
    k.sprite("Enzyme"),
    k.pos(750, 300),
    k.area(),
    k.anchor("center"),
  ])
  Lipase.color = k.rgb(0, 0, 255)
  const LipaseDesc = k.add([k.text("Lipase"), k.pos(700, 450)])

  const FunFact = k.add([
    k.sprite("Bernd"),
    k.pos(920, 30),
    k.area(),
    k.anchor("center"),
  ])

  FunFact.onHover(() => {
    k.debug.log(
      "Fun Fact: Täglich produzieren unsere Speicheldrüsen 1 bis 1,5 l Speichel.",
    )
  })

  Amylase.onClick(() => {
    k.add([k.sprite("Correct")])
    k.wait(3, () => {
      k.add([k.sprite("Zucker")])
    })
    k.wait(6, () => {
      k.go("Test3")
    })
  })

  Pepsin.onClick(() => {
    k.add([k.text("Wrong"), k.pos(400, 300)])
  })
  Lipase.onClick(() => {
    k.add([k.text("Wrong"), k.pos(700, 300)])
  })
})
