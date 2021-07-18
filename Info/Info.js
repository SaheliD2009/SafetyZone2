/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Info extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("info ", "./Info/costumes/info .svg", {
        x: -18.147002881679157,
        y: -117.05681635496188
      })
    ];

    this.sounds = [new Sound("pop", "./Info/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "information";
    yield* this.wait(20);
    this.stage.costume = "intro&sm";
  }

  *whenbackdropswitchesto2() {
    this.visible = true;
  }

  *whenbackdropswitchesto3() {
    this.visible = false;
  }
}
