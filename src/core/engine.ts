import {Rect} from './rect'
import { MaterialObject } from './interfaces/material-object';
import { EnvironmentElem } from './envRect';

export class Engine {
  d = document;
  fps = 10;
  ctx:any;
  constructor(private WIDTH, private HEIGHT, BACKGROUND_COLOR, IMAGE) {
    let c = this.d.createElement('canvas');
    c.style.position = 'fixed';
    c.style.left = '0';
    c.style.top = '0';
    c.width = WIDTH;
    c.height = HEIGHT;
    c.style.backgroundColor = BACKGROUND_COLOR;
    if (IMAGE) {
      // c.style.backgroundImage = 'url('+ IMAGE+ ')';
      c.style.backgroundSize = 'cover';
      c.style.backgroundPosition = 'center';
    }
    this.d.body.appendChild(c);
    this.ctx = c.getContext('2d');
  }
  createRect(x, y, width, height, speed, color, img?) {
    return new Rect(this.ctx, x, y, width, height, speed, color)
  }
  createEnvRect(x, y, width, height, speed, color, img?) {
    return new EnvironmentElem(this.ctx, x, y, width, height, speed, color)
  }
  public action() {
  }
  engine() {
    setInterval(requestAnimationFrame , this.fps, () => {
      this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT)
      this.action()
    })
  }
  start() {
    this.engine()
  }
  gravity(obj:MaterialObject) { 
  }


}