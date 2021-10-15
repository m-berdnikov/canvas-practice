document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector(".canvas");
  let ctx = canvas.getContext("2d");
  let pi = Math.PI;

  // x центра, y центра, радиус, начальный угол, конечный угол (отсчет начинается справа), направление рисования - true против часовой, false по часовой
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.fillStyle = "yellow";
  ctx.arc(150, 100, 75, 0, 2 * pi, false);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "green";
  ctx.fillStyle = "pink";
  ctx.arc(270, 100, 75, 0, 2 * pi, false);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  ctx.clearRect(0, 0, 400, 200);

  canvas.addEventListener("mousemove", (e) => {
    ctx.beginPath();
    let x = e.offsetX;
    let y = e.offsetY;
    let radius = Math.pow(Math.pow(x - 200, 2) + Math.pow(y - 100, 2), 0.5);
    ctx.clearRect(0, 0, 400, 200);
    ctx.arc(200, 100, radius, 0, 2 * pi, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  });
});
