/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Car extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("CAR", "./Car/costumes/CAR.svg", {
        x: 217.49999999999994,
        y: 32.00000000000003
      }),
      new Costume("half", "./Car/costumes/half.svg", {
        x: -133.55364300958354,
        y: 75.10987731748574
      })
    ];

    this.sounds = [
      new Sound("Skid", "./Car/sounds/Skid.wav"),
      new Sound("Engine", "./Car/sounds/Engine.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ENGINE" },
        this.whenIReceiveEngine
      ),
      new Trigger(Trigger.BROADCAST, { name: "NONE" }, this.whenIReceiveNone),
      new Trigger(Trigger.BROADCAST, { name: "BOTH" }, this.whenIReceiveBoth),
      new Trigger(
        Trigger.BROADCAST,
        { name: "AIRBAG" },
        this.whenIReceiveAirbag
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "SEATBELT" },
        this.whenIReceiveSeatbelt
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = true;
    this.goto(-213, -91);
  }

  *whenKeyRightArrowPressed() {
    this.x += 10;
    this.stage.vars.move = 1;
    this.broadcast("ENGINE");
  }

  *whenKeyLeftArrowPressed() {
    this.x += -5;
  }

  *whenIReceiveEngine() {
    yield* this.playSoundUntilDone("Engine");
  }

  *whenIReceiveNone() {
    this.stage.costume = "intro&weather";
    while (!(this.stage.vars.dry == 1 || this.stage.vars.wet == 1)) {
      yield;
    }
    if (this.stage.vars.dry == 1) {
      this.stage.costume = "dry";
    }
    if (this.stage.vars.wet == 1) {
      this.stage.costume = "wet";
    }
    this.visible = true;
    this.goto(-213, -91);
    while (!this.touching(this.sprites["Wall"].andClones())) {
      yield;
    }
    this.costume = "half";
    this.broadcast("CRASH NONE");
    this.stage.vars.move = 0;
  }

  *whenIReceiveBoth() {
    this.stage.costume = "intro&weather";
    while (!(this.stage.vars.dry == 1 || this.stage.vars.wet == 1)) {
      yield;
    }
    if (this.stage.vars.dry == 1) {
      this.stage.costume = "dry";
    }
    if (this.stage.vars.wet == 1) {
      this.stage.costume = "wet";
    }
    this.visible = true;
    this.goto(-213, -91);
    while (!this.touching(this.sprites["Wall"].andClones())) {
      yield;
    }
    this.costume = "half";
    this.broadcast("CRASH BOTH");
    this.stage.vars.move = 0;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }

  *whenIReceiveAirbag() {
    this.stage.costume = "intro&weather";
    while (!(this.stage.vars.dry == 1 || this.stage.vars.wet == 1)) {
      yield;
    }
    if (this.stage.vars.dry == 1) {
      this.stage.costume = "dry";
    }
    if (this.stage.vars.wet == 1) {
      this.stage.costume = "wet";
    }
    this.visible = true;
    this.goto(-213, -91);
    while (!this.touching(this.sprites["Wall"].andClones())) {
      yield;
    }
    this.costume = "half";
    this.broadcast("CRASH AIRBAG");
    this.stage.vars.move = 0;
  }

  *whenIReceiveSeatbelt() {
    this.stage.costume = "intro&weather";
    while (!(this.stage.vars.dry == 1 || this.stage.vars.wet == 1)) {
      yield;
    }
    if (this.stage.vars.dry == 1) {
      this.stage.costume = "dry";
    }
    if (this.stage.vars.wet == 1) {
      this.stage.costume = "wet";
    }
    this.visible = true;
    this.goto(-213, -91);
    while (!this.touching(this.sprites["Wall"].andClones())) {
      yield;
    }
    this.costume = "half";
    this.broadcast("CRASH SEATBELT");
    this.stage.vars.move = 0;
  }

  *whenbackdropswitchesto3() {
    this.visible = false;
    this.costume = "CAR";
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

  *whenGreenFlagClicked() {
    this.visible = false;
    this.costume = "CAR";
    this.moveAhead();
    this.stage.costume = "intro&sm";
  }

  *whenbackdropswitchesto9() {
    this.visible = false;
  }
}
