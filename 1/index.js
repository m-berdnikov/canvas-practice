document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector(".canvas");
  let ctx = canvas.getContext("2d");

  ctx.fillStyle = "red";
  ctx.fillRect(100, 50, 150, 75);

  ctx.fillStyle = "blue";
  ctx.fillRect(150, 100, 100, 50);

  ctx.clearRect(0, 0, 400, 200);

  ctx.strokeStyle = "green";
  ctx.lineWidth = 10;
  ctx.rect(5, 10, 100, 100);
  ctx.stroke();
  ctx.fillStyle = "orange";
  ctx.fill();
});
