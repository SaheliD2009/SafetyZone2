/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wall extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("wall", "./Wall/costumes/wall.svg", { x: 21.5, y: 116 })
    ];

    this.sounds = [];

    this.triggers = [];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    yield* this.wait(2);
    this.visible = true;
  }

  *whenbackdropswitchesto3() {
    yield* this.wait(2);
    this.visible = true;
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
