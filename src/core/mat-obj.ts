import { Gravity } from './gravity';
import { Rect } from './rect';

export class MatObj {
  face = 'left';
  velocityX = 0;
  velocityY = 0;
  maxSpeedX = 3;
  airResistanceAcc = 0.05 ;
  gravityClass = new Gravity;
  canvasHeight = this.ctx.canvas.height;
  canvasWidth = this.ctx.canvas.width;
  gravity = setInterval(() => {
    this.y -= this.velocityY;
if (this.velocityY > this.gravityClass.maxVelosity) {
  this.velocityY -= this.gravityClass.acceleration
}
  }, 10)

  constructor(public ctx:CanvasRenderingContext2D, public x, public y, public width, 
    public height, private movingSpeed, public color?, public img?) {
    
    let airResistance = setInterval(() => {
      this.x -= this.velocityX;
      if (Math.abs(this.velocityX) > 0) {
        if (Math.abs(this.velocityX) <= 0.1) {
          this.velocityX = 0;
        } else {
          this.velocityX = (Math.abs(this.velocityX) - this.airResistanceAcc)*Math.sign(this.velocityX)
        }
        
      }

    }, 10)
  }
  
  collide(obj:MatObj) {
    let bottom = this.y + this.height;
    let top = this.y;
    let left = this.x;
    let right = this.x + this.width;
    let center = this.x + this.width/2;
    let centerX = this.y + this.height/2;
    let objBottom = obj.y + obj.height;
    let objTop = obj.y;
    let objLeft = obj.x;
    let objRight = obj.x + obj.width;
    let objCenter = obj.x + obj.width/2;
    let objCenterX = obj.y + obj.height/2;
    // console.log(
    //   'left: ', (left < obj.x + obj.width),
    //   '\nright: ', (right > obj.x),
    //   '\nbottom: ', (bottom > obj.y)
    // )
    if (bottom > objTop && centerX < objCenterX) {
      // debugger
      if (center == objCenter) {
        return true;
      }
      if ((center > objCenter) && (left < objRight)) {
        //on right
        return true;
      }
      if ((center < objCenter) && (right > objLeft))
      return true;
    }
    return false;
  }
  fire () {
    this.ctx.fillStyle = '#ff0000';
    let bulletSize = 5;    
    switch (this.face) {
      case 'up':
      this.ctx.fillRect(this.x + (this.width/2) - bulletSize/2, this.y - bulletSize, bulletSize, bulletSize)
        break;
      case 'down':
      this.ctx.fillRect(this.x + (this.width/2) - bulletSize/2, this.y + this.height, bulletSize, bulletSize)
        break;
      case 'left':
      this.ctx.fillRect(this.x - bulletSize, this.y + (this.height/2) - bulletSize/2, bulletSize, bulletSize)
        break;
      case 'right':
      this.ctx.fillRect(this.x + this.width, this.y + (this.height/2) - bulletSize/2, bulletSize, bulletSize)
        break;
    }
  }
}