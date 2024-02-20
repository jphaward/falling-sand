const sandSize = 5;
const sandColour = 42;

function createSandPit(columns, rows) {
  let sandPit = [];
  for (let i = 0; i < columns; i++) {
      let column = [];
      for (let j = 0; j < rows; j++) {
          column.push(0);
      }
      sandPit.push(column);
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