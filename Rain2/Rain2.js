/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rain2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("rain", "./Rain2/costumes/rain.svg", {
        x: 250.78700927012525,
        y: 187.50000380860007
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }

  *whenbackdropswitchesto3() {
    this.moveBehind();
    this.goto(465, 0);
    this.visible = true;
    while (!(this.stage.vars.move == 0)) {
      this.x += -5;
      if (this.x < -460) {
        this.goto(465, 0);
      }
      yield;
    }
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

  *whenbackdropswitchesto9() {
    this.visible = false;
  }

  *whenbackdropswitchesto10() {
    this.visible = false;
  }
}
