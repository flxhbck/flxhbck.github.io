function setup() {
  // put setup code here
    var canvas = createCanvas(windowWidth, windowHeight*0.72);
    canvas.parent('Hero');
    canvas.position(0,0);
    canvas.style('z-index', '-1');

    background(255);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight*0.72);
}

function draw() {
  // put drawing code here
  stroke(240);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
