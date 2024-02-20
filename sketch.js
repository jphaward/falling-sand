const sandSize = 5;
const sandColour = 42;
const defaultColour = 0;
let sandPit;
let columns;
let rows;

function createSandPit(columns, rows) {
  let sandPit = [];
  for (let column = 0; column < columns; column++) {
      let sandColumn = [];
      for (let row = 0; row < rows; row++) {
        sandColumn.push(defaultColour);
      }
      sandPit.push(sandColumn);
  }
  return sandPit;
}

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 255, 255);
  columns = width / sandSize;
  rows = height / sandSize;
  sandPit = createSandPit(columns, rows);
}

function draw() {
  background(0);
  noStroke();

  for (let column = 0; column < columns; column++) {
    for (let row = 0; row < rows; row++) {
      if (sandPit[column][row] > 0) {
        fill(sandPit[column][row], 255, 255);
        let sandX = column * sandSize;
        let sandY = row * sandSize;
        square(sandX, sandY, sandSize);
      }
    }
  }
}

function mouseDragged() {
  let mouseColumn = floor(mouseX / sandSize);
  let mouseRow = floor(mouseY / sandSize);
  sandPit[mouseColumn][mouseRow] = sandColour;
}