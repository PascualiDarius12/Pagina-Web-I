

//VALIDAR FORMULARIO

let reg_correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;


function validar() {
    let fNombre = document.getElementById("nombre");
    // fNombre.classList.remove("error");
    let fMensaje = document.getElementById("mensaje");
    // fMensaje.classList.remove("error"); 
    let fEmail = document.getElementById("email");
    // fEmail.classList.remove("error");
    let fTelefono = document.getElementById("telefono");
    //fTelefono.classList.remove("error")
    let fErrores = document.getElementById("errores");
    fErrores.innerHTML = "";
    fErrores.style.display = "none;"
    let fEnviado = document.getElementById("enviado");


    let huboError = false;

    if (fNombre.value == "") {

        fNombre.style.borderBottom = "1px solid red";
        let p = document.createElement("p");
        p.innerHTML = "*Rellene el campo Nombre";
        fErrores.appendChild(p);
        huboError = true;
    }
    if (fEmail.value != "" && !reg_correo.test(fEmail.value)) {

        fEmail.style.borderBottom = "1px solid red";
        let p = document.createElement("p");
        p.innerHTML = "*Email inválido";
        fErrores.appendChild(p);
        huboError = true;
    }

    if (fTelefono.value == "" || isNaN(fTelefono.value)) {

        fTelefono.style.borderBottom = "1px solid red";
        let p = document.createElement("p");
        p.innerHTML = "*Rellene el campo Telefono";
        fErrores.appendChild(p);
        huboError = true;
    }

    if (fMensaje.value == "") {
        fMensaje.style.borderBottom = "1px solid red";
        let p = document.createElement("p");
        p.innerHTML = "*Complete el campo Mensaje";
        fErrores.appendChild(p);
        huboError = true;
    } else if (fMensaje.value.length > 200) {
        fMensaje.classList.add("error");
        let p = document.createElement("p");
        p.innerHTML = "*Longitud máxima del mensaje: 200";
        fErrores.appendChild(p);
        huboError = true;
    }

    if (huboError) {
        fErrores.style.display = "initial";
        return false;
    } else {
        fEmail.style.borderBottom = "2px solid  #0157c12e";
        fNombre.style.borderBottom = "2px solid  #0157c12e";
        fTelefono.style.borderBottom = "2px solid  #0157c12e";
        fMensaje.style.borderBottom = "2px solid  #0157c12e"
        let p = document.createElement("p");
        if (fEmail.value != "") {
            p.innerHTML =
                fNombre.value + " dice:\n " +
                fMensaje.value + "\n Contacto: " +
                fEmail.value + "\n Telefono: " +
                fTelefono.value + ".";
        } else {
            p.innerHTML =
                fNombre.value + " dice " +
                fMensaje.value + "\n Telefono: " +
                fTelefono.value + ".";
        }
        fEnviado.style.display = "flex";
        fEnviado.appendChild(p);
        document.forms["formulario"].reset();
        let primero = document.querySelector("form input");
        primero.focus();
    }
    return false;
}

//boton salir


let btnSalir = document.getElementById("btnSalir")
let fEnviadoS = document.getElementById("enviado");

function Salir(){
   fEnviadoS.style.display = "none";
}

btnSalir.addEventListener('click', Salir)


