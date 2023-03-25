
// primera y segunda entrega

// alert("Bienvenido a Exchange");
// // // funcion para elegir moneda

// // funcion para saber que tipo de cliente soy
// function rangoCambio(){
//     rango = parseFloat( prompt("indique que cantidad suele cambiar con frecuencia para definir el tipo de cliente"));
//     while (rango <= 300){
//         alert("Ud es un cliente basico")
//         break
//     }
//     while (rango > 300 && rango <= 499){
//         alert ("Ud es un cliente Frecuente")
//         break
//     }
//     while (rango >= 500){
//         alert("Ud es un cliente Premiun")
//         break
//     }
// }
// function despedir(){

//     alert("Gracias por usar Exchange");
// }


// let rango = 0;
// let moneda = 0;
// let pesodolar = 40;
// let pesoeuro = 43;
// let pesoreal = 8;

// // arreglo con las monedas actuales // apartir de aqui agregue al preentrega anterior
// let tiposMonedas = [
//     {pais:"Usa", moneda:"dolar",idioma:"Ingles"},
//     {pais:"Union Europea", moneda:"euro",idioma:"Variado"},
//     {pais:"Gran Bretana", moneda:"libra",idioma:"Ingles"},
//     {pais:"Brasil", moneda:"real",idioma:"Portugues"},
//     {pais:"Japon", moneda:"yen",idioma:"Japones"},
// ]
   
// class monedasnueva {
//     constructor(pais, moneda, idioma){
//         this.pais = pais;
//         this.moneda = moneda;
//         this.idioma = idioma;
//     }
// }

// //funcion para crear moneda y valida solo si la moneda ya existe y regresa al menu
// function crearMoneda (){
//     let moneda = prompt ("Ingrese la moneda que desea agregar");
//         for (let i = 0; i < tiposMonedas.length; i++){
//             if (moneda === tiposMonedas[i].moneda){
//                 alert("Moneda ya existe")
//                 break
//             }
           
//     let pais = prompt("Ingrese el pais principal de la moneda");
//     let idioma = prompt("Ingrese el idioma principal del pais");
//     const agregarMoneda = new monedasnueva(pais,moneda,idioma) // guardo el objeto en una constante para luego con ella agregar en el arreglo
//     tiposMonedas.push(agregarMoneda)
//     alert("Su moneda ha sido agregada")
//     break
    
// }
// }

// function cambiarMoneda(){
//     let moneda =prompt("ingrese que moneda desea cambiar");
//    tiposMonedas.moneda.forEach((moneda) => moneda.moneda)
  
//     if (moneda === moneda.moneda){
//         alert("Ud eligio Dolar")
//         cambiomoneda = prompt("Introduzca la cantidad a Cambiar");
//         cambio = cambiomoneda * pesodolar;
//         alert("Su cantidad en pesos es: " + cambio )
//     } else if (moneda === "2"){
//         alert("Ud eligio Euro")
//         cambiomoneda = prompt("Introduzca la cantidad a Cambiar");
//         cambio = cambiomoneda * pesoeuro;
//         alert("Su cantidad en pesos es: " + cambio )
//     } else if (moneda === "3"){
//         alert("Ud eligio Reales")
//         cambiomoneda = prompt("Introduzca la cantidad a Cambiar");
//         cambio = cambiomoneda * pesoreal;
//         alert("Su cantidad en pesos es: " + cambio )
//     } else{
//         alert("Moneda no encontrada")
//     }
// }

// console.log(tiposMonedas) // este console log es para ver a nivel de programador si esta funcionando

// // funcion para mostrar las monedas que existe actualmente
// function mostrarMoneda (){
//      tiposMonedas.forEach((pais)=>{
//         alert(`Estas son las monedas que actualmente tenemos: ${pais.moneda} Con su respectivo pais : ${pais.pais} y su Idioma oficial: ${pais.idioma}`)
//     })
    
    

// }

// //menu de opciones en el exchange 

//  let opciones = prompt("Ingrese la opcion de lo que desea hacer: \n 1: Cambiar moneda \n 2: Mostrar Moneda \n 3:Agregar Moneda \n 4: Saber que tipo de cliente soy \n 5: Salir" )

//  while (opciones !=="5"){
//     if (opciones ==="1"){
//         cambiarMoneda();
//     }
//     if (opciones ==="2"){
//         mostrarMoneda();
//     }
//     if (opciones ==="3"){
//         crearMoneda();
//     }
//     if (opciones ==="4"){
//         rangoCambio();
//     }
//     opciones = prompt("Ingrese la opcion de lo que desea hacer: \n 1: Cambiar moneda \n 2: Mostrar Moneda \n 3:Agregar Moneda \n 4: Saber que tipo de cliente soy \n 5: Salir")
//     if (opciones ==="5")
        
//         break
//  }
//  despedir()

//tercera entrega

// tomo los elementos en variables 

const deMoneda=document.getElementById("deMoneda");
const deCantidad=document.getElementById("deCantidad");
const aMoneda=document.getElementById("aMoneda");
const aCantidad=document.getElementById("aCantidad");
const exchange=document.getElementById("exchange");
const cotizacion=document.getElementById("cotizacion");

// llamo el evento que este llama a la funcion

deMoneda.addEventListener('change', calcular);
deCantidad.addEventListener('input',calcular);
aMoneda.addEventListener('change', calcular);
aCantidad.addEventListener('input', calcular);

// con el boton exchange invierto las monedas seleccionadas y llamo la funcion para que calcule de nuevo

exchange.addEventListener('click', ()=> {
  const temp=deMoneda.value;
  deMoneda.value=aMoneda.value;
  aMoneda.value=temp;

  calcular();
})

// creo la funcion que calcula en base a la cotizacion actual

function calcular(){
  const deMoneda1=deMoneda.value;
  const aMoneda1=aMoneda.value;
  
 // Uso una Api para tener un valor real de las monedas

  fetch(`https://api.exchangerate-api.com/v4/latest/${deMoneda1}`)
  .then(response => response.json())
  .then(response => {
    const cotizacion1=response.rates[aMoneda1];
    cotizacion.innerText = `Cotizacion Actual es : 1 ${deMoneda1} = ${cotizacion1} ${aMoneda1}`;
    aCantidad.value=(deCantidad.value *cotizacion1).toFixed(2);
  })
}
calcular();

// Cree una funcion que muestre cotizacion actual de las 4 monedas que mas se usan aqui en uruguay
function tablaCotizacion(){
  const tabCotizacionBrl = aMoneda.value = "BRL"
  const tabCotizacionUsd = aMoneda.value = "USD"
  const tabCotizacionEur = aMoneda.value = "EUR"
  const tabCotizacionArs = aMoneda.value = "ARS"
  const tabCotizacionUyu = aMoneda.value = "UYU"
  fetch(`https://api.exchangerate-api.com/v4/latest/${tabCotizacionUsd}`)
   .then(res => res.json())
   .then(res =>{
    const cotizacion2=res.rates[tabCotizacionUyu];
    tabla_cotizacion1.innerText = `El Dolar hoy tiene la cotizacion de ${cotizacion2} ${tabCotizacionUyu}`;
   })
   fetch(`https://api.exchangerate-api.com/v4/latest/${tabCotizacionBrl}`)
   .then(res => res.json())
   .then(res =>{
    const cotizacion3=res.rates[tabCotizacionUyu];
    tabla_cotizacion2.innerText = `El Real Brasilero hoy tiene la cotizacion de ${cotizacion3} ${tabCotizacionUyu}`;
   })
   fetch(`https://api.exchangerate-api.com/v4/latest/${tabCotizacionEur}`)
   .then(res => res.json())
   .then(res =>{
    const cotizacion4=res.rates[tabCotizacionUyu];
    tabla_cotizacion3.innerText = `El Euro hoy tiene la cotizacion de ${cotizacion4} ${tabCotizacionUyu}`;
   })
   fetch(`https://api.exchangerate-api.com/v4/latest/${tabCotizacionArs}`)
   .then(res => res.json())
   .then(res =>{
    const cotizacion5=res.rates[tabCotizacionUyu];
    tabla_cotizacion4.innerText = `El Peso Argentino hoy tiene la cotizacion de ${cotizacion5} ${tabCotizacionUyu}`;
   })
}

tablaCotizacion();


// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las porciones de la gráfica
const etiquetas = ["Dolares", "Euros", "Reales", "Pesos Argentinos"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresos = {
    data: [2500, 1500, 200, 150], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
      'rgba(163,221,203,1)',
      'rgba(232,233,161,1)',
      'rgba(230,181,102,1)',
      'rgba(229,112,126,1)',
    ],// Color de fondo
    borderColor: [
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
  ],// Color del borde
    borderWidth: 2,// Ancho del borde
};
new Chart($grafica, {
    type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
    data: {
        labels: etiquetas,
        datasets: [
            datosIngresos,
            // Aquí más datos...
        ]
    },
});