let canvas = document.getElementById("c1");
let ctx = canvas.getContext("2d");

let poligonos = [];
let poligono = new Poligono();
let elem = null;
let centrox_inicio = 0;
let centroy_inicio = 0;
let centro = false;
let eventoC = false;

canvas.addEventListener("click", function(){
  if (esVacio(event)) {
    var x = event.layerX;
    var y = event.layerY;
    poligono.dibujaPunto(ctx, x, y);
  }
}, false);
document.getElementById("btn").addEventListener("click", function(){
  poligono.cerrarPoligono(ctx);
  poligonos.push(poligono);
  poligono = new Poligono();
});

canvas.addEventListener("mousedown", function(){
  for (var i = 0; i < poligonos.length; i++) {
    const obj = poligonos[i];
    if (obj.clickPunto(event.layerX, event.layerY) != null) {
      elem = obj.clickPunto(event.layerX, event.layerY);
      return;
    }
  }
  if (poligono.clickPunto(event.layerX, event.layerY) != null) {
    elem = poligono.clickPunto(event.layerX, event.layerY);
  }
  if (elem == null) {
    seleccionarCentro(event);
  }
}, false);
function seleccionarCentro(event) {
  for (var i = 0; i < poligonos.length; i++) {
    const obj = poligonos[i];
    if (obj.clickCentro(event.layerX, event.layerY) != null) {
      elem = poligonos[i].clickCentro(event.layerX, event.layerY);
      centrox_inicio = event.layerX;
      centroy_inicio = event.layerY;
      centro = true;
      return;
    }
  }
  if (poligono.clickPunto(event.layerX, event.layerY) != null) {
    elem = poligono.clickCentro(event.layerX, event.layerY);
    centrox_inicio = event.layerX;
    centroy_inicio = event.layerY;
  }
}
canvas.addEventListener("mousemove", function(){
  if (elem != null) {
    if (centro) {
      let movx = centrox_inicio - event.layerX;
      let movy = centroy_inicio - event.layerY;
      elem.corrimiento(movx, movy);
      actualizar();

    } else {
      elem.setX(event.layerX);
      elem.setY(event.layerY);
      actualizar();

    }
  }
  centrox_inicio = event.layerX;
  centroy_inicio = event.layerY;
});

canvas.addEventListener("mouseup", function(){
  elem = null;
  centro = false;
  centrox_inicio = 0;
  centroy_inicio = 0;
});



window.addEventListener("keydown", function(event){
  if (event.key == 'c') {
    eventoC = true;
  }
});
window.addEventListener("keyup", function(event){
  if (event.key == 'c') {
    eventoC = false;
  }
});
window.addEventListener("mousewheel", function(event){
  if(eventoC){
    for (var i = 0; i < poligonos.length; i++) {
      const l = poligonos[i];
      eventoC = true;
      l.cambiarColor(eventoC);
    }
  }else{
    for (var i = 0; i < poligonos.length; i++) {
      const l = poligonos[i];
      eventoC = false;
      l.cambiarColor(eventoC);
    }
  }
});


canvas.addEventListener("dblclick", function(event){
    if (poligonos.length > 0) { 
      for (var i = 0; i < poligonos.length; i++) {
        const l = poligonos[i];
        if (l.clickPunto(event.layerX, event.layerY) != null) {
          l.borrar(l.clickPunto(event.layerX, event.layerY));
          actualizar();
        }
      }
    }
});

function esVacio(event) {
  if (poligono.clickPunto(event.layerX, event.layerY) != null) {
    return false;
  } else if (poligonos.length > 0) {
    for (var i = 0; i < poligonos.length; i++) {
      const l = poligonos[i];
      if (l.clickPunto(event.layerX, event.layerY) || l.clickCentro(event.layerX, event.layerY)) {
        return false;
      }
    }
  }
  return true;
}
function actualizar() {
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  poligono.dibujaPoligono(ctx);
  for (var i = 0; i < poligonos.length; i++) {
    const l = poligonos[i];
    l.dibujaPoligono(ctx);
  }
}