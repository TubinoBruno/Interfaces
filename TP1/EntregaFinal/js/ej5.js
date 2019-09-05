document.addEventListener('DOMContentLoaded', imageData);

function imageData() {
    let canvas = document.getElementById("ej5");
    let ctx = canvas.getContext('2d');
    let imageData = ctx.createImageData(canvas.width, canvas.height);
    
    let r = 0;
    let b = 0;
    let g = 0;
    let a = 255;

    for (let x = 0; x < imageData.width / 2; x++) {
        for (let y = 0; y < imageData.height; y++) {
            r = (x / imageData.width * 2) * 255;
            g = (x / imageData.width * 2) * 255;
            b = 0;
            setPixel(imageData, y, x, r, g, b, a);

        }

    }
    for (let x = imageData.width / 2; x < imageData.width; x++) {
        for (let y = 0; y < imageData.height; y++) {
            r = 255;
            g = 255 * (1 - (x - imageData.width / 2) / (imageData.width / 2));
            b = 0;
            setPixel(imageData, y, x, r, g, b, a);

        }

    }
    ctx.putImageData(imageData, 0, 0);
}
function setPixel(imageData, y, x, r, g, b, a) {
    let color = (x + y * imageData.width) * 4;
    imageData.data[color + 0] = r;
    imageData.data[color + 1] = g;
    imageData.data[color + 2] = b;
    imageData.data[color + 3] = a;

}