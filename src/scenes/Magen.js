import { k } from "../game.js"

import "./Test3.js"

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
    k.go("Duenndarm")
  })

  const Infotext = k.add([
    k.text(
      "Bernd gelangt durch den" +
        "\n" +
        "Magenmund in den Magen." +
        "\n" +
        "Im Magen wird das Brot mit" +
        "\n" +
        "Magensäften und Verdauungsenzymen vermischt." +
        "\n" +
        "Diese ständige Durchmischung dient ebenfalls der mechanischen Zerkleinerung.",
      {
        size: 22,
      },
    ),
    k.pos(k.width() / 3, k.height() / 9 + 0),
    k.anchor("center"),
    k.color(255, 255, 255),
  ])
})
