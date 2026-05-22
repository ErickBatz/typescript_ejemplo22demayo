//no obliga a indicar de donde procede la asignación
const numNumero1 = document.querySelector("#num-1") as HTMLInputElement;
const numNumero2 = document.querySelector("#num-2") as HTMLInputElement;
const numNumero3 = document.querySelector("#num-3") as HTMLInputElement;
const btnPromedio = document.querySelector("#btnCalcular") as HTMLButtonElement;
const respuesta = document.querySelector("#containerResultado") as HTMLElement;

function calcularPromedio(e:Event){
    e.preventDefault()
    let promedio:number;
    promedio = (parseFloat(numNumero1.value)+ parseFloat(numNumero2.value) + parseFloat(numNumero3.value))/3;
    respuesta.innerHTML="El promedio es: " + promedio;
}

btnPromedio.addEventListener("click",calcularPromedio);