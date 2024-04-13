import { k } from "../game.js"

import "./Shit.js"

k.scene("Darm", async () => {
  k.loadSprite("bread", "sprites/BernddasBrot.png")
  k.loadSprite("Darm", "sprites/Darm.png")
  k.loadSprite("ground", "sprites/ground.png")
  k.loadSprite("Verdbread", "sprites/VerdauterBernd.png")

  const SPEED = 320

  const Info1 = k.add([k.sprite("bread"), k.pos(460, 170), k.area()])
  const Info2 = k.add([k.sprite("bread"), k.pos(310, 250), k.area()])
  const Info3 = k.add([k.sprite("bread"), k.pos(450, 330), k.area()])

  const BGtest = k.add([
    k.sprite("Darm"),
    k.pos(475, 250),
    k.area(),
    k.anchor("center"),
  ])

  const Bernd = k.add([
    k.sprite("Verdbread"),

    k.pos(650, 200),
    k.anchor("center"),
    k.area(),
    "Verdaut",
  ])

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

  Info1.onCollide("Verdaut", () => {
    Info1.destroy()
    const Infotext = k.add([
      k.text(
        "1. Im Dünndarm werden die " +
          "\n" +
          "Nährstoffe wie Kohlen-   " +
          "\n" +
          "hydrate, Proteine und   " +
          "\n" +
          "Fette aus dem Brot heraus-  " +
          "\n" +
          "gezogen und vom Körper " +
          "\n" +
          "aufgenommen (Resorption)." +
          "\n" +
          "Die gesamte Oberfläche der" +
          "\n" +
          "Dünndarmschleimhaut kann  " +
          "\n" +
          "bis zu 200 m2 betragen.  " +
          "\n" +
          "Die Nährstoffe werden dann  " +
          "\n" +
          "durch die Darmwand in den " +
          "\n" +
          "Blutkreislauf aufgenommen.",
        {
          size: 22,
        },
      ),
      k.pos(145, 140),
      k.anchor("center"),
      k.color(255, 255, 255),
    ])
    Info2.onCollide("Verdaut", () => {
      Info2.destroy()
      const Infotext = k.add([
        k.text(
          "2. Im Dickdarm werden die " +
            "\n" +
            "letzten Wasser- und " +
            "\n" +
            "Salzreste aus dem Brotbrei " +
            "\n" +
            "absorbiert. Was übrig " +
            "\n" +
            "bleibt, ist hauptsächlich " +
            "\n" +
            "unverdauliche Faser und " +
            "\n" +
            "Zellulose. Hier werden " +
            "\n" +
            "auch einige nützliche " +
            "\n" +
            "Bakterien den Nahrungsresten " +
            "\n" +
            "hinzugefügt, bevor sie " +
            "\n" +
            "weiter durch den Darm " +
            "\n" +
            "bewegt werden.",
          {
            size: 22,
          },
        ),
        k.pos(820, 140),
        k.anchor("center"),
        k.color(255, 255, 255),
      ])
      Info3.onCollide("Verdaut", () => {
        Info3.destroy()
        const Infotext = k.add([
          k.text(
            "3. Die unverdaulichen Teile " +
              "\n" +
              "des Brotes, zusammen " +
              "\n" +
              "mit anderen Abfallstoffen, " +
              "\n" +
              "werden schließlich als" +
              "\n" +
              "Stuhl im Enddarm " +
              "\n" +
              "gesammelt.",
            {
              size: 22,
            },
          ),
          k.pos(140, 380),
          k.anchor("center"),
          k.color(255, 255, 255),
        ])
        Bernd.onHover(() => {
          Bernd.color = k.rgb(130, 80, 25)
        })

        Bernd.onHoverEnd(() => {
          Bernd.color = k.rgb(255, 255, 255)
        })

        Bernd.onMousePress(() => {
          k.go("Shit")
        })
      })
    })
  })
})
