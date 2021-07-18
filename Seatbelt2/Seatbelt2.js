/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Seatbelt2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("seatbelt", "./Seatbelt2/costumes/seatbelt.png", {
        x: 166,
        y: 117
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "CRASH SEATBELT" },
        this.whenIReceiveCrashSeatbelt
      )
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }

  *whenIReceiveCrashSeatbelt() {
    this.visible = true;
    this.goto(214, -28);
    yield* this.wait(5);
    this.stage.costume = "seatbelt scene ";
    yield* this.wait(9);
    this.stage.costume = "seatbelt exp";
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
