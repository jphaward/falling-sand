const sandSize = 5;
const sandColour = 42;
const defaultState = -1;
let sandPit;
let columns;
let rows;

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 255, 255);
  columns = width / sandSize;
  rows = height / sandSize;
  sandPit = createSandPit(columns, rows);
}

function createSandPit(columns, rows) {
  let sandPit = [];
  for (let column = 0; column < columns; column++) {
      let sandColumn = [];
      for (let row = 0; row < rows; row++) {
        sand = defaultState
        sandColumn.push(sand);
      }
      sandPit.push(sandColumn);
  }
  return sandPit;
}

function draw() {
  background(0);
  noStroke();
  fill(sandColour, 255, 255);
  drawSandPit();
  fall();
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
  if (sand != defaultState) {
    let sandX = column * sandSize;
    let sandY = row * sandSize;
    square(sandX, sandY, sandSize);
  }
}

function setSandColour(column, row) {
  sandPit[column][row] = sandColour;
}

function fall() {
  let fallenSandPit = createSandPit(columns, rows);
  sandPit.forEach((sandColumn, column) => {
    sandColumn.forEach((sand, row) => {
      if ((sandAtXBoundary(row) || (sandBelow(column, row))) && sandPresent(column, row)) {
        fallenSandPit[column][row] = sand
      } else {
        fallenSandPit[column][row + 1] = sand
      }
    });
  });

  sandPit = fallenSandPit
}

function sandAtXBoundary(row) {
  return row == rows - 1
}

function sandBelow(column, row) {
  return sandPit[column][row + 1] != defaultState
}

function sandPresent(column, row) {
  return sandPit[column][row] != defaultState
}