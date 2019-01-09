export class KeyBoard {
    keys = {
      'left': 37,
      'up': 38,
      'right': 39,
      'down': 40,
      'space': 32,
    }
    pressedKeys = {}
    constructor() {
      window.addEventListener('keydown', (e:KeyboardEvent) => {
        this.pressedKeys[e.keyCode] = true;
        // console.log(e.keyCode)
      })
      window.addEventListener('keyup', (e:KeyboardEvent) => {
        this.pressedKeys[e.keyCode] = false;
      })
    }
    isDown(key) {
      return this.pressedKeys[this.keys[key]]
    }
    
    
  
}