export default function sketch(p){
  let canvas, x, y;

  p.setup = () => {
    canvas = p.createCanvas(325, 325);
    p.noStroke();
    x = p.width/2;
    y = p.height + 12;
  }

  p.draw = () => {
    p.background('black');
    // p.ellipse(150, 100, 100, 100);
    p.stroke(50);
    p.fill(100);
    p.ellipse(x, y, 24, 24);

    y = y - 1;
    x = x - 1;

    if (x < -12) {
      x = p.height;
    }

    if (y < -12) {
      y = p.height;
    }
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    if(canvas) //Make sure the canvas has been created
      p.fill(newProps.color);
  }
}