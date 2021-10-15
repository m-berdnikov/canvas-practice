document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector(".canvas");
  let ctx = canvas.getContext("2d");
  let colorInput = document.querySelector(".color");
  let color = "#000";

  colorInput.addEventListener("input", (e) => {
    console.log(e.target.value);
    color = e.target.value;
  });

  const fillField = () => {
    let cor = { x: event.offsetX, y: event.offsetY };

    ctx.fillRect(cor.x - 5, cor.y - 5, 10, 10);
    ctx.fillStyle = color;
    ctx.fill();
  };

  canvas.addEventListener("mousedown", (e) => {
    console.log("down");
    canvas.addEventListener("mousemove", fillField);
  });

  canvas.addEventListener("mouseup", (e) => {
    console.log("sdfsdf");
    canvas.removeEventListener("mousemove", fillField);
  });
});
