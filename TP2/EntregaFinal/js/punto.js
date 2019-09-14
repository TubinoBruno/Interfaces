class Punto {
  constructor(x, y, radio, paramCentro, r, g , b, a) {
    this.x = x;
    this.y = y;
    this.radio = radio;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.color = 'rgb(' + this.r +','+ this.g +','+ this.b + ',' + this.a + ')';
    this.centro = paramCentro;
  }

  dibuja() { 
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  getY() {
    return this.y;
  }

  getX() {
    return this.x;
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  clickPunto(x, y) {
    var radioMouse = Math.sqrt(Math.pow(x - this.x , 2) + Math.pow(y - this.y , 2));
    if (radioMouse <= this.radio) {
      return true;
    }
    return false;
  }

  

  aumentar() {
    if((this.g >= 0) || (this.b >= 0)){
      this.color = 'rgba('+ (this.r-=4) + ','+this.g + ',' + this.b + ',' + this.a + ')';
    }
    if(this.r <= 255){
      this.color = 'rgba('+ this.r + ','+(this.g -= 40) + ',' + (this.b -= 40) + ',' + this.a + ')';
    }
  }

  disminuir() {
    if (this.r < 255) {
      this.color = 'rgba('+ (this.r+=4) + ','+this.g + ',' + this.b + ',' + this.a + ')';
    }
    if(this.r == 255){
      this.color = 'rgba('+ this.r + ','+(this.g += 40) + ',' + (this.b += 40) + ',' + this.a + ')';
      console.log(this.color + "bajarRojo");

    }
  }
}