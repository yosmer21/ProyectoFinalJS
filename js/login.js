// tomo los datos del usuario y los valido con el local storage de que esten correctos para que acceda a su billetera


const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password) //comparo los datos de ingreso
    if(!validUser){
        return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario y/o clave incorrecta',
          })
    }
    Swal.fire({
        icon: 'success',
        timer: 2000,
        title: `Bienvenido ${validUser.name}`,
        showConfirmButton:false
    }).then((res) => {
       
        window.location.href = 'billetera.html'  //redirecciono a billetera
    })
})


