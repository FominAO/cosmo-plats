import { Engine } from './engine';
import { KeyBoard } from './keyboard';

class App {
  height = 700;
  width = 500;
  color = '#fafafa';
  imgUrl = '/img/back.jpg'
  engine = new Engine(this.width, this.height, this.color, this.imgUrl);
  constructor() {
  }
}
const app = new App;
const kb = new KeyBoard;
let platformsCoord = [
  {
    x:300 ,
    y:530
  },
  {
    x:250, 
    y: 480
  },
  {
    x:380, 
    y:380
  },
  {
    x: 50,
    y:290
  },
  {
    x: 150,
    y:220
  },
  {
    x: 250,
    y:140
  },
  {
    x: 370,
    y:170
  },
  {
    x: 100,
    y:70
  }
]
let platforms = []
for (let i = 0; i < platformsCoord.length; i++) {
  platforms[i] = app.engine.createEnvRect(0 + platformsCoord[i].x, app.height - platformsCoord[i].y, 100, 10, 0, '#796082')
  platforms[i].defyingGravity()  
}

var rect1 =  app.engine.createRect(50, 550, 50, 50, 2, '#e8bdbd');
var floor = app.engine.createEnvRect(0, app.height - 10, app.width, 10, 0, '#796082')
floor.defyingGravity()
app.engine.action = function () {
  if (kb.isDown('up')) {
    rect1.moveUp(2)
  }
  if (kb.isDown('down')) {
    rect1.moveDown(2)
  }
  if (kb.isDown('left')) {
    rect1.moveLeft(2)
  }
  if (kb.isDown('right')) {
    rect1.moveRight(2)
  }
  if (kb.isDown('space')) {
    rect1.jump();
  }
  app.engine.gravity(rect1)
  if (rect1.collide(floor)) {
    rect1.onGround = true;
    rect1.velocityY = 0;
    rect1.y = floor.y - rect1.height
  }
  rect1.draw()
  floor.draw()
  platforms.forEach(elem => {
    if (rect1.collide(elem)) {
      if(rect1.velocityY > 0) {
        rect1.velocityY = 4;
      } else {
        rect1.onGround = true;
        rect1.velocityY = 0;
        rect1.y = elem.y - rect1.height
      }
      
    }
    elem.draw()
  })
}
app.engine.start()
