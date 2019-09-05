let canvas = document.getElementById("ej3");
let ctx = canvas.getContext("2d");
let width = 100;
let height = 100;

let r = 0;
let g = 0;
let b = 255;
let a = 255;
function paint() {
  let imageData = ctx.createImageData(width, height);

  for (let i = 0; i < height; i++) {//pinta 1/3 desde arriba hacia abajo
    for (let j = 0; j < width; j++)
      setPixel(imageData, i, j, r, g, b, a);
  }

  ctx.putImageData(imageData, 75, 45);//pos
}

function setPixel(imageData, i, j, r, g, b, a) {
  let index = (j + i * imageData.width) * 4;
  imageData.data[index + 0] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
  imageData.data[index + 3] = a;
}

paint();