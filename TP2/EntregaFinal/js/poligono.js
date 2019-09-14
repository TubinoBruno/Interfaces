class Poligono {
  constructor() {
    this.puntos = [];
    this.centro;
    this.cerrado = false;
  }

  cerrarPoligono(ctx) { 
    if (this.puntos.length > 0) {
      this.crearLinea(ctx,this.puntos[0].getX(), this.puntos[0].getY(), this.puntos[this.puntos.length - 1].getX(), this.puntos[this.puntos.length - 1].getY())
      this.calcularCentro(ctx);
    }
    this.cerrado = true;
  }

  calcularCentro(ctx) { 
    var sumaX = 0;
    var sumaY = 0;

    for (var i = 0; i < this.puntos.length; i++) {
      const l = this.puntos[i];
      sumaX += l.getX();
      sumaY += l.getY();
    }

    sumaX = sumaX / this.puntos.length;
    sumaY = sumaY / this.puntos.length;

    var c = new Punto(sumaX, sumaY, 7, true, 0, 255, 0, 1);
    c.dibuja();
    this.centro = c;
  }

  crearLinea(ctx, pos_x, pos_y, posx, posy) { 
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgb(255,255,0,255)';
    ctx.beginPath();
    ctx.moveTo(pos_x, pos_y);
    ctx.lineTo(posx, posy);
    ctx.stroke();
  }

  clickPunto(x, y) { 
    for (var i = 0; i < this.puntos.length; i++) {
      const l = this.puntos[i];
      if (l.clickPunto(x, y)) {
        return l;
      }
    }
  }

 

  dibujaPunto(ctx, x, y) {
    console.log("pos en x: " + x + " pos en y: " + y);

    if (this.clickCentro(x, y) == null) {
      var punto = new Punto(x, y, 10, false, 255, 0, 0, 1);
      punto.dibuja()
      if (this.puntos.length > 0) {
        this.crearLinea(ctx, x, y, this.puntos[this.puntos.length - 1].getX(), this.puntos[this.puntos.length - 1].getY())
      }
      this.puntos.push(punto);
    }
  }
  clickCentro(x, y) {
    if (this.centro != null) {
      if (this.centro.clickPunto(x, y)) {
        return this;
      }
    }
    return null;
  }

  dibujaPoligono(ctx) {
    if (this.centro != null) {
      this.calcularCentro(ctx);
    }
    for (var i = 0; i < this.puntos.length; i++) {
      const l = this.puntos[i];
      l.dibuja();
      if (this.puntos.length > 0 && i > 0) {
        const l1 = this.puntos[i-1];
        this.crearLinea(ctx, l.getX(),l.getY(), l1.getX(), l1.getY());
      }
    }

    if (this.cerrado) {
      this.cerrarPoligono(ctx);
    }
  }

 

  borrar(p) {
    for (var i = 0; i < this.puntos.length; i++) {
      const obj = this.puntos[i];
      if (obj === p) {
        this.puntos.splice(i,1);
      }
    }
  }
  corrimiento(x, y) {
    for (var i = 0; i < this.puntos.length; i++) {
      const l = this.puntos[i];
      l.setX(l.getX() - x);
      l.setY(l.getY() - y);
    }
    this.centro.setX(this.centro.getX() - x);
    this.centro.setY(this.centro.getY() - y);
  }


  cambiarColor(color) {
    for(var i = 0; i<this.puntos.length; i++){
      const l = this.puntos[i];
      if(color == true){
        l.aumentar();
      }else{
        l.disminuir();
      }l.dibuja();
    }
  }
}