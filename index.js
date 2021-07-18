import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Car from "./Car/Car.js";
import Airbag from "./Airbag/Airbag.js";
import Seatbelt from "./Seatbelt/Seatbelt.js";
import Both from "./Both/Both.js";
import None from "./None/None.js";
import Info from "./Info/Info.js";
import Dry from "./Dry/Dry.js";
import Wet from "./Wet/Wet.js";
import Rain from "./Rain/Rain.js";
import Rain2 from "./Rain2/Rain2.js";
import Dry2 from "./Dry2/Dry2.js";
import Dry3 from "./Dry3/Dry3.js";
import Wall from "./Wall/Wall.js";
import Rear from "./Rear/Rear.js";
import Man from "./Man/Man.js";
import Abs from "./Abs/Abs.js";
import AirbagOnly from "./AirbagOnly/AirbagOnly.js";
import Seatbelt2 from "./Seatbelt2/Seatbelt2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Car: new Car({
    x: 91,
    y: -91,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  Airbag: new Airbag({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Seatbelt: new Seatbelt({
    x: 91,
    y: 87,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11
  }),
  Both: new Both({
    x: -45.938825518413886,
    y: -1.0932550331853697,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  None: new None({
    x: 90.11856713510218,
    y: -8.229819791643223,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Info: new Info({
    x: -77.86371575229367,
    y: -30.544567649777278,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Dry: new Dry({
    x: 14,
    y: 17,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Wet: new Wet({
    x: -89.2474472727101,
    y: 11.491771406424146,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Rain: new Rain({
    x: -370,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Rain2: new Rain2({
    x: 95,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Dry2: new Dry2({
    x: 430,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Dry3: new Dry3({
    x: -35,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Wall: new Wall({
    x: 246,
    y: -61.001670721537565,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  Rear: new Rear({
    x: -332.99937348445576,
    y: -81.00404828680254,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  Man: new Man({
    x: 189,
    y: -117,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Abs: new Abs({
    x: 73,
    y: -34,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  AirbagOnly: new AirbagOnly({
    x: 141,
    y: -31,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  Seatbelt2: new Seatbelt2({
    x: 214,
    y: -28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 15
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
