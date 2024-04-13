import { k } from "../game.js"

import "./Magen.js"

k.scene("Darm", async () => {
  k.loadSprite("bread", "sprites/BernddasBrot.png")
  k.loadSprite("Darm", "sprites/Darm.png")
  k.loadSprite("ground", "sprites/ground.png")
  k.loadSprite("Verdbread", "sprites/VerdauterBernd.png")

  const SPEED = 320

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
    "Verdaut",
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

  k.onKeyDown("left", () => {
    // .move() is provided by pos() component, move by pixels per second
    Bernd.move(-SPEED, 0)
  })

  k.onKeyDown("right", () => {
    // .move() is provided by pos() component, move by pixels per second
    Bernd.move(SPEED, 0)
  })

  k.onKeyDown("up", () => {
    // .move() is provided by pos() component, move by pixels per second
    Bernd.move(0, -SPEED)
  })

  k.onKeyDown("down", () => {
    // .move() is provided by pos() component, move by pixels per second
    Bernd.move(0, SPEED)
  })

  const Info1 = k.add([k.sprite("bread"), k.pos(50, 50), k.area()])
  const Info2 = k.add([k.sprite("bread"), k.pos(250, 250), k.area()])
  const Info3 = k.add([k.sprite("bread"), k.pos(350, 350), k.area()])

  Info1.onCollide("Verdaut", () => {
    Info1.destroy()
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
})
