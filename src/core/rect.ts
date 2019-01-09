import { MatObj } from "./mat-obj";

export class Rect extends MatObj {
  onGround = false;
  
  draw() {
    this.ctx.fillStyle = this.color;
    if (this.x < 0) {
      this.x = this.ctx.canvas.width - this.width
    }
    if (this.x + this.width > this.ctx.canvas.width) {
      this.x = 0
    }
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  moveUp(delta) {
    this.jump()
    
    this.face = 'up'
  }
  moveDown(delta) {
    this.face = 'down'
  }
  moveLeft(delta) {
    if (Math.abs(this.velocityX) < this.maxSpeedX) {
      this.velocityX += 0.2;
    }
    
    this.face = 'left'
  }
  moveRight(delta) {
    if (Math.abs(this.velocityX) < this.maxSpeedX) {
      this.velocityX -= 0.2;
    }
    
    this.face = 'right'
  }
  jump() {
    if ( this.onGround ) {
      this.velocityY = 3;
    }
    this.onGround = false;
  }
  combojump() {
    if ( this.onGround ) {
      this.velocityY = 3;
    }
    this.onGround = false;
  }
}