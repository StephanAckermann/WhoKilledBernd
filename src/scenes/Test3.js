import { k } from "../game.js"

import "./Magen.js"

k.scene("Test3", async () => {
  k.loadSprite("bread", "sprites/BernddasBrot.png")
  k.loadSprite("Speiseroehre", "sprites/Speiseroehre.png")
  k.loadSprite("ground", "sprites/ground.png")

  const BGtest = k.add([
    k.sprite("Speiseroehre"),
    k.pos(475, 250),
    k.area(),
    k.anchor("center"),
  ])

  const Bernd = k.add([
    k.sprite("bread"),

    k.pos(480, 300),
    k.anchor("center"),
    k.area(),
  ])

  const Infotext = k.add([
    k.text(
      "Nach dem Kauen wird der Nahrungsbissen heruntergeschluckt." +
        "\n" +
        "Dies löst den Schluckreflex aus." +
        "\n" +
        "Der zerkleinerte Bernd wird durch die Speiseröhre transportiert," +
        "\n" +
        "eine 25cm lange, muskulöse Röhre." +
        "\n" +
        "Dieses wird durch Muskelbewegungen(Peristaltik) der Speiseröhre in den Magen transportiert." +
        "\n" +
        "Es gibt keine Verdauung hier; es ist nur ein Durchgangsweg.",
      {
        size: 22,
      },
    ),
    k.pos(k.width() / 2, k.height() / 8 + 0),
    k.anchor("center"),
    k.color(255, 255, 255),
  ])

  Bernd.onHover(() => {
    Bernd.color = k.rgb(255, 0, 0)
  })

  Bernd.onHoverEnd(() => {
    Bernd.color = k.rgb(255, 255, 255)
  })

  Bernd.onClick(() => {
    k.go("Magen")
  })
})
