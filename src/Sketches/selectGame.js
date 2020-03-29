export default function sketch(p){
  let canvas;
  const resolution = 5;
  const size = 375;
  const frameRate = 10;
  const minPos = resolution;
  const maxPos = size/resolution - resolution;
  let posX = resolution;
  let posY = resolution;
  const vel = p.createVector(0 ,0);

  // draw points at increments of 25px
  const drawGrid = () => {
    // i = 5, j = 5 --> plot at (25, 25)
    // i = 5, j = 10 --> plot at (25, 50)
    // i = 5, j = 15 --> plot at (25, 75)
    // i = 5, j = 20 --> plot at (25, 100)
    // ...etc
    for (let i = resolution; i*resolution < size; i+=resolution) {
      for (let j = resolution; j*resolution < size; j+=resolution) {
        // if (pos.x === i && pos.y === j) {
        if (posX === i && posY === j) {
          p.stroke('white');
          p.strokeWeight(10);
        } else {
          p.stroke('rgba(170, 170, 170,0.25)');
          p.strokeWeight(5);
        }
        p.point(i*resolution,j*resolution);
      }
    }
  }

  const edgeCollideCheck = () => {
    if (posX < minPos) {
      posX = maxPos;
    }

    if (posX > maxPos) {
      posX = minPos;
    }

    if (posY < minPos) {
      posY = maxPos;
    }

    if (posY > maxPos) {
      posY = minPos;
    }
  }

  p.setup = () => {
    canvas = p.createCanvas(size, size);
    p.frameRate(frameRate);
    p.noStroke();
  }

  p.draw = () => {

    p.background('black');
    drawGrid();

    posX = posX + vel.x*resolution;
    posY = posY + vel.y*resolution;

    edgeCollideCheck();

    // dont let pos values go beyond constraint
    posX = p.constrain(posX, minPos, maxPos);
    posY = p.constrain(posY, minPos, maxPos);
  }

  p.keyPressed = () => {
    if (p.keyCode === p.UP_ARROW || p.key === 'w') {
      console.log('up');
      // posY = posY - resolution;
      vel.set(0, -1);
    }
    if (p.keyCode === p.DOWN_ARROW || p.key === 's') {
      console.log('down');
      // posY = posY + resolution;
      vel.set(0, 1);
    }
    if (p.keyCode === p.LEFT_ARROW || p.key === 'a') {
      console.log('left');
      // posX = posX - resolution;
      vel.set(-1, 0);
    }
    if (p.keyCode === p.RIGHT_ARROW || p.key === 'd') {
      console.log('right');
      // posX = posX + resolution;
      vel.set(1, 0);
    }
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    if(canvas) //Make sure the canvas has been created
      p.fill(newProps.color);
  }
}