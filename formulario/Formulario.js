(function(){

    var formulario = document.getElementsByName('formulario')[0], /*ese 0 es por que usamos name*/
        elementos = formulario.elementos,
        boton = document.getElementById('boton')

  /*funciones para validar cada input:*/

    var validarNombre = function(e){
        if(formulario.nombre.value == 0){
           alert("Debe completar el campo Nombre y Apellido");
           e.preventDefault();
        }

    };
    var validarDni = function(e){
        if(formulario.dni.value == 0){
           alert("Debe completar el campo Dni");
           e.preventDefault();
        }

    };
    var validarTelefono = function(e){
        if(formulario.telefono.value == 0){
           alert("Debe completar el campo Telefono");
           e.preventDefault();
        }

    };
    var validarEspecialidad= function(e){
        if(formulario.especialidad.value == 0){
           alert("Debe elegir una Especialidad");
           e.preventDefault();
        }

    };
    var validarObraSocial= function(e){
        if(formulario.obraSocial.value == 0){
           alert("Debe elegir una Obra Social");
           e.preventDefault();
        }

    };



  /*la funcion validar tiene todas las funciones de vailidacion de cada input adentro:*/

   var validar = function(e){

    validarNombre(e);
    validarDni(e);
    validarTelefono(e);
    validarEspecialidad(e);
    validarObraSocial(e);

   };

   /*Para cuando pise enviar se inicie la funcion validar:*/

   formulario.addEventListener('submit', validar)

   
  

}())

