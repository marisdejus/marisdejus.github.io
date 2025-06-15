function setup() {
  let canvas = createCanvas(windowWidth / 3, windowHeight / 3);
  canvas.parent("visuals-canvas");
  noStroke();
}

function draw() {
  background(255);
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), 30, 30);
}
