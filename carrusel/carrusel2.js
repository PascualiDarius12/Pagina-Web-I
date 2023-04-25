(function () {

    var contenedor1 = document.getElementById('contenedor1');
    var contenedor2 = document.getElementById('contenedor2');
    var contenedor3 = document.getElementById('contenedor3');
    var contenedor4 = document.getElementById('contenedor4');
    var contenedor5 = document.getElementById('contenedor5');
    var botizq = document.getElementById('izq');
    var botder = document.getElementById('der');

    const arreglo = new Array (contenedor1,contenedor2,contenedor3,contenedor4,contenedor5);
    var i = 0;

    var girarDer = function(){
            //contenedor3.classList.remove('agrandar');
            //contenedor3.classList.add('achicar');

            //contenedor1.classList.remove('achicar2');
            //contenedor1.classList.add('achicar2');
            
            arreglo[i].classList.add('moverder');
            arreglo[i].classList.remove('achicar2');
            arreglo[i].classList.add('achicar');
           
            //contenedor2.classList.remove('achicar');
            //contenedor2.classList.add('agrandar');
            arreglo[i+1].classList.add('moverder');
            arreglo[i+1].classList.remove('achicar');
            arreglo[i+1].classList.add('agrandar');
            


            arreglo[i+2].classList.add('moverder');
            arreglo[i+2].classList.remove('agrandar');
            arreglo[i+2].classList.add('achicar');
            
            arreglo[i+3].classList.add('moverder');
            arreglo[i+3].classList.remove('achicar');
            arreglo[i+3].classList.add('achicar2');


            arreglo[i+4].classList.add('movertododer');
            

            


            //contenedor4.classList.remove('achicar')
            //contenedor4.classList.add('agrandar');

            //contenedor5.classList.remove('achicar2');
            //contenedor5.classList.add('achicar');
           
            
           
    }


    var girarIzq = function(){
        contenedor3.classList.remove('agrandar');

            contenedor1.classList.remove('achicar2');
            contenedor2.classList.remove('achicar');
            contenedor4.classList.remove('achicar');
            contenedor5.classList.remove('achicar2');
    }
   


botder.addEventListener('click', girarDer)
botizq.addEventListener('click', girarIzq)




    
}())