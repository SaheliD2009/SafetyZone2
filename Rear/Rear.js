/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rear extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("rear", "./Rear/costumes/rear.svg", {
        x: -326.50936801864464,
        y: 11.577596211795083
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CRASH NONE" },
        this.whenIReceiveCrashNone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CRASH BOTH" },
        this.whenIReceiveCrashBoth
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CRASH AIRBAG" },
        this.whenIReceiveCrashAirbag
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CRASH SEATBELT" },
        this.whenIReceiveCrashSeatbelt
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCrashNone() {
    this.visible = true;
  }

  *whenIReceiveCrashBoth() {
    this.visible = true;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenIReceiveCrashAirbag() {
    this.visible = true;
  }

  *whenIReceiveCrashSeatbelt() {
    this.visible = true;
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

  *whenbackdropswitchesto5() {
    this.visible = false;
  }

  *whenbackdropswitchesto6() {
    this.visible = false;
  }

  *whenbackdropswitchesto7() {
    this.visible = false;
  }

  *whenbackdropswitchesto8() {
    this.visible = false;
  }
}
