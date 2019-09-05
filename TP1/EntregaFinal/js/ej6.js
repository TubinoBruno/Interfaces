let canvas = document.getElementById("ej6");
let ctx = canvas.getContext('2d');
let imagen = new Image();
let a = 255;
imagen.crossOrigin = "anonymous";
imagen.src = "image/imagen.jpg";


imagen.onload = function () {
  canvas.width = imagen.width;
  canvas.height = imagen.height;
  ctx.drawImage(imagen, 0, 0);
  filtroGris();
}

function getRed(imageData, x, y) {
  let index = (x + y * imageData.width) * 4;
  return imageData.data[index + 0];
}
function getGreen(imageData, x, y) {
  let index = (x + y * imageData.width) * 4;
  return imageData.data[index + 0];
}
function getBlue(imageData, x, y) {
  let index = (x + y * imageData.width) * 4;
  return imageData.data[index + 0];
}
function filtroGris() {
  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      
      let gris = (getRed(imageData, x, y) + getGreen(imageData, x, y) + getBlue(imageData, x, y)) / 3;
      setPixel(imageData, x, y, gris, a);
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function setPixel(imageData, x, y, gris, a) {
  let index = (x + y * imageData.width) * 4;
  imageData.data[index + 0] = gris;
  imageData.data[index + 1] = gris;
  imageData.data[index + 2] = gris;
  imageData.data[index + 3] = a;
}
