// creo que el codigo que se usa para tomar los datos del usuario

const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistrado = Users.find(user => user.email === email)
    if(isUserRegistrado){ //valido si el usuario esta registrado 
        // return alert ('Usuario ya registrado')
        return Swal.fire({
            icon: 'warning',
            title: 'Atencion',
            text: 'Usuario ya registrado',
          })
    }
     Users.push({name:name, email: email, password: password}) // agrego el objeto al arreglo en el localstorage
     localStorage.setItem('users', JSON.stringify(Users))
    //  alert('Registro Exitoso')
    Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso',
        text: 'Ya puede iniciar sesion',
    }).then((res) => {
        window.location.href = 'login.html'
    })
     // redirecciono a login
    
})
