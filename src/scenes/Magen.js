import { k } from "../game.js"

import "./MagenFragen.js"

/** Das ist unser erstes Level. Hier können wir Dinge einstellen die nur für
 * dieses Level gelten sollen, und aber auch Funktionen verwenden die in allen
 * Levels gleich sind.
 *
 * Wir brauchen hier das Schlüsselwort `async` direkt vor der Funktion, weil
 * wir innerhalb der Funktion eine spezielle Funktion aufrufen und warten
 * müssen bis diese beendet ist. Dieses warten passiert mit dem Schlüsselwort
 * `await`.
 *
 * Bei diesem ersten Level handelt es sich um ein Jump'n'Run-Spiel. Da müssen
 * wir einige spezialisierte Funktionen verwenden.
 *
 */
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

  Bernd.onMousePress(() => {
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
        "Diese ständige Durchmischungdient ebenfalls" +
        "\n" +
        "mechanischen Zerkleinerung.",
      {
        size: 22,
      },
    ),
    k.pos(k.width() / 4.5, k.height() / 6 + 0),
    k.anchor("center"),
    k.color(255, 255, 255),
  ])
})
