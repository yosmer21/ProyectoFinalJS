
const cambiarbtn = document.getElementById('cambiar_btn')
const cargarbtn = document.getElementById('cargar_btn')
const retirarbtn = document.getElementById('retirar_btn')
let balance = 0;
let suma = 0;

// configuracion del boton de cargar saldo a la billetera
cargarbtn.addEventListener('click',() =>{
    Swal.fire({
        icon: 'info',
        title: 'Introduzca Cantidad U$D',
        text: 'Solo puede cargar en Dolares',
        input: 'number',
        inputPlaceholder:'Cantidad',
        confirmButtonColor:'#23145b',
        showCancelButton: true,
        confirmButtonText: ' Cargar'
      })
      .then(function(result){
        if (result.value) {
            let monto = result.value
            if(monto <= 0){ // valida que no se coloque una cantidad invalida
                Swal.fire('Ingrese una Cantidad Valida')
            }else{
                balance= parseInt(balance) + parseInt(monto);
               document.getElementById("balanceusd").innerHTML = `U$D ${balance}`;
               Swal.fire( 'Usted cargó' + ' ' + monto + 'USD')
            }
        }
      })    
})
// configuracion del boton de retirar saldo a la billetera

retirarbtn.addEventListener('click',() =>{
    Swal.fire({
        icon: 'info',
        title: 'Introduzca Cantidad a Retirar',
        input: 'number',
        inputPlaceholder:'Cantidad',
        confirmButtonColor:'#23145b',
        showCancelButton: true,
        confirmButtonText: 'Retirar'
      })
      .then(function(result){
        if (result.value) {
            let monto = result.value
            if(monto <= 0 || monto > balance){
                Swal.fire('Monto imposible de Retirar')
            }else{
                balance= parseInt(balance) - parseInt(monto);
               document.getElementById("balanceusd").innerHTML = `U$D ${balance}`;
               Swal.fire( 'Usted retiro' + ' ' + monto + 'USD')
            }
        }
      })    
})


 