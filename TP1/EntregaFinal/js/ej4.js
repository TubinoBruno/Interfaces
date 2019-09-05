let canvas = document.getElementById("ej4");
let ctx = canvas.getContext("2d");
let width = canvas.scrollWidth;
let height = canvas.scrollHeight;

function paint() {

  let imageData = ctx.createImageData(width, height);

  for (let i = 0; i < height; i++) {
    let color = i / height * 255;
    let a = 255;
    for (let j = 0; j < width; j++) {
      setPixel(imageData, i, j, color, color, color, a);
    }
  }

  ctx.putImageData(imageData, 0, 0);
  
}

function setPixel(imageData, i, j, r, g, b, a) {

  let index = (j + i * imageData.width) * 4;

  imageData.data[index + 0] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
  imageData.data[index + 3] = a;

}

paint();