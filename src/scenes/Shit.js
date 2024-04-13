import { k } from "../game.js"

import "./test1.js"

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
k.scene("Shit", async () => {
  k.loadSprite("bread", "sprites/BernddasBrot.png")
  k.loadSprite("Shit", "sprites/Kackeposter.png")
  k.loadSprite("ground", "sprites/ground.png")
  k.loadSprite("Verdbread", "sprites/VerdauterBernd.png")
  k.loadSprite("Kacke", "sprites/Shit.png")

  const SPEED = 320

  const Mitte = k.add([
    k.sprite("Kacke"),
    k.pos(190, 300),
    k.area(),
    k.anchor("center"),
    k.body(),
    "Target",
  ])

  const BGtest = k.add([
    k.sprite("Shit"),
    k.pos(475, 250),
    k.area(),
    k.anchor("center"),
  ])

  const BerndMove = k.add([
    k.sprite("Kacke"),
    k.pos(550, 200),
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
})
