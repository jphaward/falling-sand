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
        sand = defaultColour
        sandColumn.push(sand);
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
  fill(sandColour, 255, 255);
  drawSandPit();
}

function mouseDragged() {
  let mouseColumn = floor(mouseX / sandSize);
  let mouseRow = floor(mouseY / sandSize);
  setSandColour(mouseColumn, mouseRow)
}

function drawSandPit() {
  sandPit.forEach((sandColumn, column) => {
    sandColumn.forEach((sand, row) => {
      drawSand(sand, column, row);
    });
  });
}

function drawSand(sand, column, row) {
  if (sand != defaultColour) {
    let sandX = column * sandSize;
    let sandY = row * sandSize;
    square(sandX, sandY, sandSize);
  }
}

function setSandColour(column, row) {
  sandPit[column][row] = sandColour;
}