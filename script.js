let letters = [];
let exploded = false;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("canvas");
  textFont("Kode Mono");
  textSize(83);
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  if (exploded) {
    background(0);
    for (let l of letters) {
      l.update();
      l.display();
    }
  }
}

document.getElementById("name").addEventListener("click", () => {
  exploded = true;
  document.body.style.backgroundColor = "black";
  document.getElementById("name").style.display = "none";

  const chars = "MārisDejus";
  for (let i = 0; i < chars.length; i++) {
    letters.push(new FlowingLetter(chars[i]));
  }
});

class FlowingLetter {
  constructor(char) {
    this.char = char;
    this.x = random(width);
    this.y = random(height);
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // bounce off walls
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  display() {
    fill(this.color);
    text(this.char, this.x, this.y);
  }
}
