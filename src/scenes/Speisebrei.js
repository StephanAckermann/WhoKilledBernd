import { k } from "../game.js"

import "./MagenFragen.js"
import "./Darm.js"

k.scene("Speisebrei", async () => {
  k.loadSprite("Bernd", "sprites/BernddasBrot.png")
  k.loadSprite("Verdaut", "sprites/VerdauterBernd.png")

  const Info = k.add([
    k.text(
      "Der Speisebrei wird portionenweise an den Dünndarm " +
        "\n" +
        "weitergegeben. Dieser hat eine Gesamtlänge von 2-3m. " +
        "\n" +
        "Im Dünndarm setzen Bauchspeicheldrüsenenzyme und Galle  " +
        "\n" +
        "ein, um die weiteren Verdauungsprozesse zu unterstützen.  " +
        "\n" +
        "Der Saft der beiden Organeverdaut den im Mund und Magen " +
        "\n" +
        "vorverdauten Speisebrei zu Ende.",
    ),
    k.pos(50, 20),
  ])

  const Bernd = k.add([
    k.sprite("Bernd"),
    k.pos(200, 350),
    k.area(),
    k.anchor("center"),
  ])

  Bernd.onClick(() => {
    Bernd.destroy()
    const Bernd2 = k.add([
      k.sprite("Verdaut"),
      k.pos(500, 350),
      k.area(),
      k.anchor("center"),
    ])
    Bernd2.onClick(() => {
      k.go("Darm")
    })
  })
})
