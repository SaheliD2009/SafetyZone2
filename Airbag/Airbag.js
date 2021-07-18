/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Airbag extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Airbag", "./Airbag/costumes/Airbag.svg", {
        x: 262.9969629271358,
        y: 37.2921837819799
      })
    ];

    this.sounds = [new Sound("pop", "./Airbag/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenbackdropswitchesto() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.broadcast("AIRBAG");
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }

  *whenbackdropswitchesto3() {
    this.visible = false;
  }
}
