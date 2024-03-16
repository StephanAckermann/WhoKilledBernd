import { k } from "../game.js"

import "./test1.js"

k.scene("Test2", async () => {
  const player = k.get("Bernd")[0]
  player.destroy()
  const bla = k.get("BGtest")[0]
  bla.destroy()
})
