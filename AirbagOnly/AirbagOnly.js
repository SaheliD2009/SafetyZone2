/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AirbagOnly extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ab only", "./AirbagOnly/costumes/ab only.svg", {
        x: 1.7785351355460648,
        y: 32.901950558567705
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "CRASH AIRBAG" },
        this.whenIReceiveCrashAirbag
      )
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }

  *whenIReceiveCrashAirbag() {
    this.visible = true;
    this.goto(141, -31);
    yield* this.wait(3);
    this.stage.costume = "airbag scene";
    yield* this.wait(6);
    this.stage.costume = "airbag exp";
    yield* this.wait(15);
    this.stage.costume = "intro&sm";
  }

  *whenbackdropswitchesto3() {
    this.visible = false;
  }

  *whenbackdropswitchesto4() {
    this.visible = false;
  }
}
