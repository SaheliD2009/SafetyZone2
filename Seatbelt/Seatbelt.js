/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Seatbelt extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Seatbelt", "./Seatbelt/costumes/Seatbelt.svg", {
        x: 230.61837161718427,
        y: -23.724648786498364
      })
    ];

    this.sounds = [new Sound("pop", "./Seatbelt/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.broadcast("SEATBELT");
  }

  *whenbackdropswitchesto3() {
    this.visible = true;
  }

  *whenbackdropswitchesto4() {
    this.visible = false;
  }
}
