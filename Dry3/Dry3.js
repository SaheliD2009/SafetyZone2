/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Dry3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dry", "./Dry3/costumes/dry.svg", {
        x: 249.98210511227094,
        y: 183.84707310218135
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }

  *whenbackdropswitchesto() {
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

  *whenbackdropswitchesto9() {
    this.visible = false;
  }
}
