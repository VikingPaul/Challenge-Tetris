////////////////////Game Variables
var Game = {};
var x1 = 0
var y1 = 0
var height1 = 0
var width1 = 0
var x2 = 0
var y2 = 0
var height2 = 0
var width2 = 0
var position = 0
var nextBlock = 0
var score = 0
Game.canvas = document.getElementById('myCanvas');
Game.canvas.ctx = myCanvas.getContext('2d');
gameboard = [
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false]
]

////////////////////Clears Game Board
function refresh() {
  Game.canvas.ctx.fillStyle="white";
  Game.canvas.ctx.fillRect(0,0,Game.canvas.width,Game.canvas.height);
  Game.canvas.ctx.fillStyle="black";
  Game.canvas.ctx.fillRect(0,Game.canvas.height-1,Game.canvas.width,Game.canvas.height);
  Game.canvas.ctx.fillRect(Game.canvas.width-1,1,1,Game.canvas.height);
  for (let i = 0; i < 10; i++) {
    Game.canvas.ctx.fillStyle="black";
    Game.canvas.ctx.fillRect(i * 35,0,1,Game.canvas.height);
  }
  for (let i = 0; i < 15; i++) {
    Game.canvas.ctx.fillStyle="black";
    Game.canvas.ctx.fillRect(0,i * 35,Game.canvas.width,1);
  }
////////////////////Fills Gameboard
  for (var i in gameboard) {
    for (var j in gameboard[i]) {
      if (gameboard[i][j]) {
        Game.canvas.ctx.fillStyle="blue";
        Game.canvas.ctx.fillRect(j*35,i*35,35,35);
      }
    }
  }
}

////////////////////Draws the Game Pieces
function runGame() {
  refresh()
  Game.canvas.ctx.fillStyle="steelblue";
  Game.canvas.ctx.fillRect(x1*35,y1*35,width1*35,height1*35);
  Game.canvas.ctx.fillRect(x2*35,y2*35,width2*35,height2*35);
  if (y1 + height1 >= 15 || y2 + height2 >= 15 || gameboard[y1+height1][x1] || gameboard[y2+height2][x2]) {
    for (let i = 0; i < height1; i++) {
      gameboard[y1+i][x1] = true
    }
    for (let i = 0; i < height2; i++) {
      gameboard[y2+i][x2] = true
   }
    for (let i = 0; i < width1; i++) {
      gameboard[y1][x1+i] = true
    }
    for (let i = 0; i < width2; i++) {
      gameboard[y2][x2+i] = true
    }
////////////////////Selects New Piece
    doodoodoo()
////////////////////Checks for Line Clear
    for (let i in gameboard) {
      let del = 0
      for (let j in gameboard[i]) {
        if (gameboard[i][j] === true) {
          del++
        }
      }
      if (del === 10) {
        let j = 0
        score++
        document.getElementById('score').innerHTML = score
        while (i-j > 0) {
          gameboard[i-j] = gameboard[i-j-1]
          j++
        }
        refresh()
      }
    };
  }
////////////////////Ends Game
  if (gameboard[1][0]) {
    clearInterval(interval);
  };
}

////////////////////Moves the Pieces Downward
function gameTimer() {
  y1++
  y2++
  runGame();
}

////////////////////Checks if a move is legal
function checkLeft() {
  for (let i=0; i < height1; i++) {
    if (gameboard[y1+height1][x1] || x1 <0) {
      x1++
      x2++
      break;
    };
  };
  for (let i=0; i < height2; i++) {
    if (gameboard[y2+height2][x2]) {
      x1++
      x2++
      break;
    };
  };
}
function checkRight() {
  for (let i=0; i < height1; i++) {
    if (gameboard[y1+height1][x1] || x2 > 9) {
      x1--
      x2--
      break;
    };
  };
  for (let i=0; i < height2; i++) {
    if (gameboard[y2+height2][x2]) {
      x1--
      x2--
      break;
    };
  };
}
function checkdown() {
  if (y1 > 14 || y2 > 14) {
    y1--
    y2--
  };
}

////////////////////Listens for the Keystrokes
document.addEventListener("keyup", function(e) {
  switch(e.keyCode) {
    case 37:
      x1--
      x2--
      checkLeft();
      break;
    case 39:
      x1++
      x2++
      checkRight();
      break;
    case 40:
      y1++
      y2++
      break;
    case 38:
      position++
      if (position === 4) {
        position = 0
      };
      shapes(position, nextBlock);
  };
  runGame();
});

////////////////////Randomly Selects Blocks
function doodoodoo() {
  position = 0;
  refresh();
  nextBlock = Math.floor(Math.random()* 7 + 1)
  switch (nextBlock) {
////////////////////Straight
    case 1:
      x1 = 0;
      y1 = 0;
      height1 = 4;
      width1 = 1;

      x2 = 0;
      y2 = 0;
      height2 = 0;
      width2 = 0;
      break;
    case 2:
////////////////////'L'
      x1 = 0;
      y1 = 0;
      height1 = 1;
      width1 = 1;

      x2 = 1;
      y2 = 0;
      height2 = 3;
      width2 = 1;
      break;
    case 3:
////////////////////'J'
      x1 = 0;
      y1 = 0;
      height1 = 3;
      width1 = 1;

      x2 = 1;
      y2 = 0;
      height2 = 1;
      width2 = 1;
      break;
    case 4:
////////////////////'S'
      x1 = 0;
      y1 = 0;
      height1 = 2;
      width1 = 1;

      x2 = 1;
      y2 = 1;
      height2 = 2;
      width2 = 1;
      break;
    case 5:
////////////////////'Z'
      x1 = 0;
      y1 = 1;
      height1 = 2;
      width1 = 1;

      x2 = 1;
      y2 = 0;
      height2 = 2;
      width2 = 1;
      break;
    case 6:
////////////////////'T'
      x1 = 0;
      y1 = 0;
      height1 = 3;
      width1 = 1;

      x2 = 1;
      y2 = 1;
      height2 = 1;
      width2 = 1;
      break;
    case 7:
////////////////////Square
      x1 = 0;
      y1 = 0;
      height1 = 2;
      width1 = 1;

      x2 = 1;
      y2 = 0;
      height2 = 2;
      width2 = 1;
      break;
  };
Game.canvas.ctx.fillStyle="steelblue";
Game.canvas.ctx.fillRect(x1*35,y1*35,width1*35,height1*35);
Game.canvas.ctx.fillRect(x2*35,y2*35,width2*35,height2*35);
}

////////////////////Frames Per Second
var interval = setInterval(gameTimer, 1000)

////////////////////Starts Game
doodoodoo()