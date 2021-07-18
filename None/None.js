/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class None extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("None", "./None/costumes/None.svg", {
        x: -7.968842095027583,
        y: 70.495295
      })
    ];

    this.sounds = [new Sound("pop", "./None/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("NONE");
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = true;
  }

  *whenbackdropswitchesto3() {
    this.visible = false;
  }
}
