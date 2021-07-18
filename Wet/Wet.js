/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Wet", "./Wet/costumes/Wet.svg", {
        x: -167.39722821321175,
        y: -101.7172311261262
      })
    ];

    this.sounds = [new Sound("pop", "./Wet/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenbackdropswitchesto() {
    this.visible = true;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.stage.costume = "wet info";
    yield* this.wait(15);
    this.stage.costume = "wet";
    this.stage.vars.wet += 1;
  }

  *whenbackdropswitchesto3() {
    this.visible = false;
  }

  *whenbackdropswitchesto4() {
    this.stage.vars.wet = 0;
  }

  *whenbackdropswitchesto5() {
    this.visible = false;
  }
}
