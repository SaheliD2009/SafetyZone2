/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Dry extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Dry", "./Dry/costumes/Dry.svg", {
        x: 182.11249423832214,
        y: -107.5971371321321
      })
    ];

    this.sounds = [new Sound("pop", "./Dry/sounds/pop.wav")];

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
    this.stage.costume = "dry info";
    yield* this.wait(15);
    this.stage.costume = "dry";
    this.stage.vars.dry += 1;
  }

  *whenbackdropswitchesto3() {
    this.visible = false;
  }

  *whenbackdropswitchesto4() {
    this.stage.vars.dry = 0;
  }

  *whenbackdropswitchesto5() {
    this.visible = false;
  }
}
