/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Man extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Man/costumes/costume1.png", { x: 95, y: 87 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "CRASH NONE" },
        this.whenIReceiveCrashNone
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveCrashNone() {
    this.visible = true;
    this.goto(189, -117);
    yield* this.wait(5);
    this.stage.costume = "no safety scene";
    yield* this.wait(9);
    this.stage.costume = "no safety exp";
    yield* this.wait(15);
    this.stage.costume = "intro&sm";
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }

  *whenbackdropswitchesto3() {
    this.visible = false;
  }

  *whenbackdropswitchesto4() {
    this.visible = false;
  }
}
