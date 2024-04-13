import { k } from "../game.js"

import "./Shit.js"

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
k.scene("Darm", async () => {
  k.loadSprite("bread", "sprites/BernddasBrot.png")
  k.loadSprite("Darm", "sprites/Darm.png")
  k.loadSprite("ground", "sprites/ground.png")
  k.loadSprite("Verdbread", "sprites/VerdauterBernd.png")

  const BGtest = k.add([
    k.sprite("Darm"),
    k.pos(475, 250),
    k.area(),
    k.anchor("center"),
  ])

  const Bernd = k.add([
    k.sprite("Verdbread"),

    k.pos(450, 200),
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
    k.go("Shit")
  })

  const Infotext = k.add([
    k.text(
      "Wenn der Brei im Magen" +
        "\n" +
        "ausreichend verdaut worden" +
        "\n" +
        "ist, wird er portionsweise" +
        "\n" +
        "in den Dünndarm geschoben.",
      {
        size: 22,
      },
    ),
    k.pos(k.width() / 6.8, k.height() / 6 + 0),
    k.anchor("center"),
    k.color(255, 255, 255),
  ])
})
