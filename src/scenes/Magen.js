import { k } from "../game.js"

import "./MagenFragen.js"

k.scene("Magen", async () => {
  k.loadSprite("bread", "sprites/BernddasBrot.png")
  k.loadSprite("Magen", "sprites/Magen.png")
  k.loadSprite("ground", "sprites/ground.png")

  const BGtest = k.add([
    k.sprite("Magen"),
    k.pos(475, 250),
    k.area(),
    k.anchor("center"),
  ])

  const Bernd = k.add([
    k.sprite("bread"),

    k.pos(550, 350),
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
    k.go("MagenFragen")
  })

  const Infotext = k.add([
    k.text(
      "Bernd gelangt durch den Magenmund" +
        "\n" +
        "in den Magen." +
        "\n" +
        "Im Magen wird Bernd mit Magensäften und" +
        "\n" +
        "Verdauungsenzymen vermischt." +
        "\n" +
        "Diese ständige Durchmischung dient ebenfalls" +
        "\n" +
        "der mechanischen Zerkleinerung.",
      {
        size: 22,
      },
    ),
    k.pos(k.width() / 4.5, k.height() / 6 + 0),
    k.anchor("center"),
    k.color(255, 255, 255),
  ])
})
