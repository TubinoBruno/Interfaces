const MAXIMO = 100;

let filtro = document.getElementsByClassName("filtro");
let matriz = [];

let array = [];

function cargarMatriz() {
    for (let i = 0; i < MAXIMO; i++) {
        matriz[i] = [];
        for (let j = 0; j < MAXIMO; j++) {
            matriz[i][j] = Math.floor(Math.random() * MAXIMO + 1);

        }

    }
}


function valorMaximoTotal() {
    let aux = 0;
    for (let i = 0; i < MAXIMO; i++) {
        for (let j = 0; j < MAXIMO; j++) {
            if (matriz[i][j] > aux) {
                aux = matriz[i][j];
            }
        }
    }
    console.log("El maximo de toda la matriz es " + aux)
}

function valorMinMaxFilas() {
    let par = 0;
    let impar = matriz[0][0];
    for (let i = 0; i < MAXIMO; i++) {
        for (let j = 0; j < MAXIMO; j++) {
            if (i % 2 != 0) {
                if (matriz[i][j] < impar) {
                    impar = matriz[i][j];
                }

            }
            else {
                if (matriz[i][j] > par) {
                    par = matriz[i][j];
                }
            }
        }
        promedios(matriz, array);
    }
    console.log("El valor maximo en las filas pares es " + par);
    console.log("El valor minimo en las filas impares es " + impar);
}

function promedios() {

    for (var i = 0; i < MAXIMO; i++) {
        let suma = 0;
        for (var j = 0; j < MAXIMO; j++) {
            suma += matriz[i][j];
        }
        array[i] = suma / MAXIMO;
        suma = 0;
    }



}
cargarMatriz();
console.table(matriz);
valorMaximoTotal();
valorMinMaxFilas();
console.table(array);