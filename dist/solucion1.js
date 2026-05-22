"use strict";
const numNumero1 = document.querySelector("#num-1");
const numNumero2 = document.querySelector("#num-2");
const numNumero3 = document.querySelector("#num-3");
const btnPromedio = document.querySelector("#btnCalcular");
const respuesta = document.querySelector("#containerResultado");
function calcularPromedio(e) {
    e.preventDefault();
    let promedio;
    promedio = (parseFloat(numNumero1.value) + parseFloat(numNumero2.value) + parseFloat(numNumero3.value)) / 3;
    respuesta.innerHTML = "El promedio es: " + promedio;
}
btnPromedio.addEventListener("click", calcularPromedio);
