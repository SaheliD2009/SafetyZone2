/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("intro&sm", "./Stage/costumes/intro&sm.svg", {
        x: 332.9697924859,
        y: 187.29526025399997
      }),
      new Costume("intro&weather", "./Stage/costumes/intro&weather.svg", {
        x: 404.657815,
        y: 181.464615
      }),
      new Costume("dry", "./Stage/costumes/dry.svg", {
        x: 269.4333333333333,
        y: 180.97453308105472
      }),
      new Costume("wet", "./Stage/costumes/wet.svg", {
        x: 244.48348425198682,
        y: 185.1544482152048
      }),
      new Costume("airbag exp", "./Stage/costumes/airbag exp.svg", {
        x: 240,
        y: 180
      }),
      new Costume("seatbelt exp", "./Stage/costumes/seatbelt exp.svg", {
        x: 240,
        y: 180
      }),
      new Costume("no safety exp", "./Stage/costumes/no safety exp.svg", {
        x: 240,
        y: 180
      }),
      new Costume("airbag scene", "./Stage/costumes/airbag scene.svg", {
        x: 240,
        y: 180
      }),
      new Costume("seatbelt scene ", "./Stage/costumes/seatbelt scene .svg", {
        x: 240,
        y: 180
      }),
      new Costume("no safety scene", "./Stage/costumes/no safety scene.svg", {
        x: 240,
        y: 180
      }),
      new Costume("information", "./Stage/costumes/information.svg", {
        x: 240,
        y: 180
      }),
      new Costume("both exp", "./Stage/costumes/both exp.svg", {
        x: 240,
        y: 180
      }),
      new Costume("dry info", "./Stage/costumes/dry info.svg", {
        x: 240,
        y: 180
      }),
      new Costume("wet info", "./Stage/costumes/wet info.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.move = 1;
    this.vars.dry = 0;
    this.vars.wet = 0;
  }

  *whenGreenFlagClicked() {
    this.costume = "intro&sm";
  }
}
