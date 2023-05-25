

   /* var formulario = document.getElementById('formulario'),
        elementos = formulario.elementos,
        boton = document.getElementById('boton')

    let fnombre = document.forms["formu"]["nombre"];

  /*funciones para validar cada input:

    var validarNombre = function(){
        if(fnombre.value == 0){
          // alert("Debe completar el campo Nombre y Apellido");
          fnombre.st
          
           
        }

    };
    var validarDni = function(){
        if(formulario.dni.value == 0){
          // alert("Debe completar el campo Dni");
           
        }

    };
    var validarTelefono = function(){
        if(formulario.telefono.value == 0){
         //  alert("Debe completar el campo Telefono");
          
        }

    };
    var validarEspecialidad= function(){
        if(formulario.especialidad.value == 0){
          // alert("Debe elegir una Especialidad");
          
        }

    };
    var validarObraSocial= function(){
        if(formulario.obraSocial.value == 0){
          // alert("Debe elegir una Obra Social");
          
        }

    };



  la funcion validar tiene todas las funciones de vailidacion de cada input adentro:

   var validar = function(){

    validarNombre();
    validarDni();
    validarTelefono();
    validarEspecialidad();
    validarObraSocial();

   };

   Para cuando pise enviar se inicie la funcion validar:

   formulario.addEventListener('submit', validar) */
   function validateForm() {
    let fnombre = document.forms["formu"]["nombre"];
    let fdni = document.forms["formu"]["dni"];
    let ftelefono = document.forms["formu"]["telefono"];

    if (fnombre.value == "") {
      fnombre.style.borderBottom = "2px solid red"
      
    }else{
        fnombre.style.borderBottom = "2px solid #01c1012e" 
    }

    
    if (fdni.value == "") {
      fdni.style.borderBottom = "2px solid red"
      
    }else{
        fdni.style.borderBottom = "2px solid #01c1012e"
    }
    
    if (ftelefono.value == "") {
      ftelefono.style.borderBottom = "2px solid red"
      
    }else{
        ftelefono.style.borderBottom = "2px solid #01c1012e"
    }

    return false;

  }
   
  



