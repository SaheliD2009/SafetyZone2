/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Abs extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "ABS-removebg-preview",
        "./Abs/costumes/ABS-removebg-preview.svg",
        { x: -43.176470588235304, y: 55.04524886877823 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "CRASH BOTH" },
        this.whenIReceiveCrashBoth
      )
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }

  *whenIReceiveCrashBoth() {
    this.visible = true;
    this.goto(73, -34);
    yield* this.wait(3);
    this.stage.costume = "both exp";
    yield* this.wait(10);
    this.stage.costume = "intro&sm";
  }

  *whenbackdropswitchesto3() {
    this.visible = false;
  }
}
