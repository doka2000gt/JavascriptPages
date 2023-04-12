let x = 300;
let y = 200;
let dx = 2;
let dy = 1;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(100);
  x += dx;
  y += dy;
  rect(x, y, 20, 20);
}

function keyPressed() {
  dx = 0;
  dy = 0;
  
  if (keyCode == UP_ARROW) {
    dy = -1;
  }
  if (keyCode == DOWN_ARROW) {
    dy = 1;
  }
  if (keyCode == RIGHT_ARROW) {
    dx = 1;
  }
  if (keyCode == LEFT_ARROW) {
    dx = -1;
  }
}
