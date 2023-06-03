document.forms["formulario2"].reset();
let primero = document.querySelector("form input");
primero.focus();

function validar() {
  let fNombre = document.getElementById("nombre2");
  let fDni = document.getElementById("dni2");
  let fTelefono = document.getElementById("telefono2");
  let fServicio = document.getElementById("especialidad");
  let fObraSocial = document.getElementById("obraSocial")

  let fErrores = document.getElementById("errores2");
  fErrores.innerHTML = "";
  fErrores.style.display = "none;"


  let fEnviado = document.getElementById("enviado2");


  let huboError = false;

  if (fNombre.value == "") {

    fNombre.style.borderBottom = "1px solid red";
    let p = document.createElement("p");
    p.innerHTML = "*Rellene el campo Nombre";
    fErrores.appendChild(p);
    huboError = true;
  }
  if (fDni.value == "" || isNaN(fDni.value)) {
    fDni.style.borderBottom = "1px solid red"
    let p = document.createElement("p");
    p.innerHTML = "*Rellene el campo Dni"
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

  if(fServicio.selectedIndex == ""){
    fServicio.style.border = "1px solid red";
    let p = document.createElement("p");
    p.innerHTML = "*Seleccione una Especialidad";
    fErrores.appendChild(p);
    huboError = true;
  }



  if (huboError) {
    fErrores.style.display = "initial";
    return false;
  } else {

    fNombre.style.borderBottom = "2px solid  #0157c12e"
    fDni.style.borderBottom = "2px solid  #0157c12e"
    fTelefono.style.borderBottom = "2px solid  #0157c12e"
    fServicio.style.borderBottom = "0.5px solid black"
    let p = document.createElement("p");


    p.innerHTML = fNombre.value + "\nDNI:" + fDni.value + "\nTelefono: " + fTelefono.value + "\nEspecialidad:" +
    fServicio.options[fServicio.selectedIndex].text + "\nObra Social:" + fObraSocial.options[fObraSocial.selectedIndex].text + "\nPronto nos comunicaremos con usted.";

    fEnviado.style.display = "flex";
    fEnviado.appendChild(p);
    document.forms["formulario2"].reset();
    let primero = document.querySelector("form input");
    primero.focus();
  }
  return false;
}

//boton salir


let btnSalir = document.getElementById("btnSalir")
let fEnviado2 = document.getElementById("enviado2");

function Salir(){
   fEnviado2.style.display = "none";
}

btnSalir.addEventListener('click', Salir)




