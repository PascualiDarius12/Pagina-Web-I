
/*Funcion para cuando haga scroll aparezcan las cosas en la pagina principal*/

(function(){

    /*defino en variables el contenedor que quiero hacer que aparezca 
    y una variable con el tamano de la pantalla del navegador*/

    var contenedorImgyTxt = document.getElementById('scroll');
    var alturaPantalla = window.innerHeight;


    /*Un if para comprobar si la partre superio de nuestro contenedor 
    es menor que la altura de la pantalla aplicamos .visible
    si no quitamos la clase .visible*/

    var aparece = function(){ 
      
        if(contenedorImgyTxt.getBoundingClientRect().top < alturaPantalla){
        contenedorImgyTxt.classList.add('visible');
       }else{
        contenedorImgyTxt.classList.remove('visible')
       }
    }


    /*evento para cuando detecte el scroll active la funcion*/


    window.addEventListener('scroll', aparece)




}())