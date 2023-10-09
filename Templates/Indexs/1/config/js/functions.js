
console.log('se conecto correctamente');

     

function valida_register(){
    //valido el nombre
    if (document.register.Email.value.length==0){
           alert("Tiene que escribir su nombre")
           document.write("<div style='color:blue;font-size:14px;'>aqui muestro el primer texto</div>")
           document.fvalida.nombre.focus()
           return 0;
    }
 
    
}


function valida_envia(){
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalida.nombre.focus()
           return 0;
    }
 
    //valido la edad. tiene que ser entero mayor que 18
    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value=edad
    if (edad==""){
           alert("Tiene que introducir un número entero en su edad.")
           document.fvalida.edad.focus()
           return 0;
    }else{
           if (edad<18){
                  alert("Debe ser mayor de 18 años.")
                  document.fvalida.edad.focus()
                  return 0;
           }
    }
 
    //valido el interés
    if (document.fvalida.interes.selectedIndex==0){
           alert("Debe seleccionar un motivo de su contacto.")
           document.fvalida.interes.focus()
           return 0;
    }
 
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}

let register = document.getElementById('register');
    register.addEventListener('submit', function(evt){
        evt.preventDefault();
        let MessageErMail = [];
        let MessageErUser = [];
        let MessageErPass = [];
        let MessageErPassA = [];
        let MessageErPassNosame = [];

        let v = true;

        if(Email.value === null || Email.value == '' || Email.value.length < 1){
            MessageErMail.push('Ingrese su correo.');
            v = false;
        }

        if(User.value === null || User.value == '' || User.value.length < 1){
            MessageErUser.push('Ingrese su User.');
            v = false;
        }

        if(Password.value === null || Password.value=='' || Password.value.length < 1){
            MessageErPass.push('Ingrese su password.');
            v = false;
        }

        if(PasswordA.value === null || PasswordA.value == '' || PasswordA.value.length < 1){
            MessageErPassA.push('Ingrese otra vez la password.');
            v = false;
        }

        if(PasswordA.value != Password.value){
            MessageErPassNosame.push('Las password no son iguales.');
            v = false;
        }

        ErrEmail.innerHTML = MessageErMail.join();
        ErrUser.innerHTML = MessageErUser.join();
        ErrPass.innerHTML = MessageErPass.join();
        ErrPassA.innerHTML = MessageErPassA.join();
        ErrPassnSame.innerHTML = MessageErPassNosame.join();

        if(v){
            //return true;
            this.submit()
        }

    });