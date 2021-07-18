/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Both extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Both", "./Both/costumes/Both.svg", {
        x: 10.07475448577705,
        y: 64.73191820568793
      })
    ];

    this.sounds = [new Sound("pop", "./Both/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("BOTH");
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = true;
  }

  *whenbackdropswitchesto3() {
    this.visible = false;
  }
}
