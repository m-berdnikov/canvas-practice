document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector(".canvas");
  let ctx = canvas.getContext("2d");

  let x = 200;
  let y = 100;
  let stepCount = 0; // кол-во шагов в одном направлении
  let direction; // moving diretion
  let timer;

  let mouseX;
  let mouseY;

  const drawDot = () => {
    ctx.clearRect(0, 0, 400, 200);
    if (stepCount === 0) {
      stepCount = Math.floor(15 * Math.random()); // 0-14
      direction = Math.floor(8 * Math.random()); // 0-7
    } else {
      --stepCount;
    }

    switch (direction) {
      case 0:
        // up
        --y;
        break;
      case 1:
        // right
        ++x;
        break;
      case 2:
        // dowm
        ++y;
        break;
      case 3:
        --x;
        break;
      case 4:
        // right up
        ++x;
        --y;
        break;
      case 5:
        // right down
        ++x;
        ++y;
        break;
      case 6:
        // left down
        --x;
        ++y;
        break;
      case 7:
        // left up
        --x;
        --y;
        break;
      default:
        break;
    }

    if (x < 0 || x > 400 || y < 0 || y > 200) {
      step = 0;
    }

    ctx.fillRect(x - 3, y - 3, 6, 6);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
    timer = setTimeout(drawDot, 100);
  };

  canvas.addEventListener("mousemove", (e) => {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
  });

  drawDot();
});
