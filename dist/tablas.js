"use strict";
const numero = document.getElementById("num-1");
const resultado = document.getElementById("resultadoTablas");
const form = document.getElementById("formTablas");
const botonTabla = document.getElementById("btnGenerar");
function generarTablaMultiplicar(e) {
    e.preventDefault();
    let valor = parseFloat(numero.value);
    resultado.innerHTML = "";
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
        tabla += `<p>${valor} x ${i} = ${valor * i}</p>`;
    }
    resultado.innerHTML = tabla;
}
botonTabla.addEventListener("click", generarTablaMultiplicar);
