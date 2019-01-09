import { Rect } from "./rect";
import { MatObj } from "./mat-obj";

export class EnvironmentElem extends MatObj {
  defyingGravity() {
    clearInterval(this.gravity)
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  collide(obj:MatObj) {
    return false
  }
}