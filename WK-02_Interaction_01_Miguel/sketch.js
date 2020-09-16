let boxColor = (255);
let colorChange = 2;
let bgColor = (0);


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(bgColor);
  push()

  if (boxColor > 255 || boxColor < bgColor) {
    colorChange = -colorChange;
  }
  boxColor = boxColor + colorChange;

  let xPos = 175
  let yPos = 125


  fill(255, 75, 75);
  //background rectangle
  rect(xPos - 39, yPos - 71, 325, 470);

  // circle geometry

  //midground rectangle
  rect(xPos - 23.5, yPos - 49, 295, 425);

  //left top circle
  circle(xPos - 23, yPos + 35, 11);
  //left bottom circle
  circle(xPos - 23, yPos + 290, 11);

  //right top circle
  circle(xPos + 271.5, yPos + 35, 11);
  //right bottom circle
  circle(xPos + 271.5, yPos + 290, 11);

  //top middle circle
  circle(xPos + 124, yPos + 376, 11);
  //bottom middle circle
  circle(xPos + 124, yPos - 49.5, 11);


  //foreground square
  rect(xPos - 8, yPos - 34, 265, 395);
  fill(boxColor);
  //grid of squares
  for (var x = 175; x <= 400; x += 32)
    for (y = 100; y <= 480; y += 32)
      square(x, y, 25);
}
