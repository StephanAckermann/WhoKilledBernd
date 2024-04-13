import { k } from "../game.js"

import "./Magen.js"
import "./Speisebrei.js"

k.scene("MagenFragen", async () => {
  k.loadSprite("Correct", "sprites/Peptide.png")
  k.loadSprite("Protein", "sprites/Wurst.png")
  k.loadSprite("Vitamin", "sprites/Apfel.png")
  k.loadSprite("Kohlenhydrat", "sprites/Toast_Big.png")
  k.loadSprite("Fact", "sprites/MagenMann.png")

  const Question = k.add([
    k.text(
      "Welche Funktion hat die Magensäure auf die Verdauung?" +
        "\n" +
        "Sie hilft uns, welche Nährstoffe zu verdauen?",
    ),
    k.pos(50, 20),
  ])

  const Kohlenhydrate = k.add([
    k.sprite("Kohlenhydrat"),
    k.pos(150, 300),
    k.area(),
    k.anchor("center"),
  ])

  const KHDesc = k.add([k.text("Kohlenhydrate"), k.pos(80, 450)])

  const Protein = k.add([
    k.sprite("Protein"),
    k.pos(450, 300),
    k.area(),
    k.anchor("center"),
  ])

  const PDesc = k.add([k.text("Proteine"), k.pos(400, 450)])

  const Vitamin = k.add([
    k.sprite("Vitamin"),
    k.pos(750, 300),
    k.area(),
    k.anchor("center"),
  ])

  const VDesc = k.add([k.text("Vitamine"), k.pos(700, 450)])

  const FunFact = k.add([
    k.sprite("Fact"),
    k.pos(910, 460),
    k.area(),
    k.anchor("center"),
  ])

  FunFact.onHover(() => {
    k.debug.log(
      "Fun-Fact: Auch seelische Vorgänge, wie ständiger Ärger oder Stress steigern die Magensaftbildung. Verstärkt wird die Produktion ebenfalls durch in der Nahrung enthaltene Gewürze, sowie Nikotin, Koffein und Alkohol. Eine Überproduktion von Säure oder eine verminderte Schleimbildung kann zu Entzündungen der Schleimhaut und zu einem Magengeschwür führen.",
    )
  })

  Protein.onClick(() => {
    k.add([k.sprite("Correct"), k.pos(0, 200)])

    k.wait(8, () => {
      k.go("Speisebrei")
    })
  })

  Kohlenhydrate.onClick(() => {
    k.add([k.text("Wrong"), k.pos(100, 300)])
  })
  Vitamin.onClick(() => {
    k.add([k.text("Wrong"), k.pos(700, 300)])
  })
})
