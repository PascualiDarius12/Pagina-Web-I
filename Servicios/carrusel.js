(function () {

    var contenedor1 = document.getElementById('contenedor1');
    var contenedor2 = document.getElementById('contenedor2');
    var contenedor3 = document.getElementById('contenedor3');
    var contenedor4 = document.getElementById('contenedor4');
    var contenedor5 = document.getElementById('contenedor5');
    

    var agrandar = function(){
        
            contenedor3.classList.add('agrandar');

            contenedor1.classList.add('achicar2');
            contenedor2.classList.add('achicar');
            contenedor4.classList.add('achicar');
            contenedor5.classList.add('achicar2');
           
            
           
    }


    var igual = function(){
        contenedor3.classList.remove('agrandar');

            contenedor1.classList.remove('achicar2');
            contenedor2.classList.remove('achicar');
            contenedor4.classList.remove('achicar');
            contenedor5.classList.remove('achicar2');
    }
   


contenedor3.addEventListener('mouseover', agrandar)
contenedor3.addEventListener('mouseout', igual)


var agrandar2 = function(){
        
    contenedor4.classList.add('agrandar');

    contenedor1.classList.add('achicar2');
    contenedor2.classList.add('achicar2');
    contenedor3.classList.add('achicar');
    contenedor5.classList.add('achicar');
   
    
   
}


var igual2 = function(){
contenedor4.classList.remove('agrandar');

    contenedor1.classList.remove('achicar2');
    contenedor2.classList.remove('achicar2');
    contenedor3.classList.remove('achicar');
    contenedor5.classList.remove('achicar');
}



contenedor4.addEventListener('mouseover', agrandar2)
contenedor4.addEventListener('mouseout', igual2)


var agrandar3 = function(){
        
    contenedor5.classList.add('agrandar');

    contenedor1.classList.add('achicar2');
    contenedor2.classList.add('achicar2');
    contenedor3.classList.add('achicar2');
    contenedor4.classList.add('achicar');
   
    
   
}


var igual3 = function(){
contenedor5.classList.remove('agrandar');

    contenedor1.classList.remove('achicar2');
    contenedor2.classList.remove('achicar2');
    contenedor3.classList.remove('achicar2');
    contenedor4.classList.remove('achicar');
}



contenedor5.addEventListener('mouseover', agrandar3)
contenedor5.addEventListener('mouseout', igual3)

var agrandar4 = function(){
        
    contenedor2.classList.add('agrandar');

    contenedor1.classList.add('achicar');
    contenedor3.classList.add('achicar');
    contenedor4.classList.add('achicar2');
    contenedor5.classList.add('achicar2');
   
    
   
}


var igual4 = function(){
contenedor2.classList.remove('agrandar');

    contenedor1.classList.remove('achicar');
    contenedor3.classList.remove('achicar');
    contenedor4.classList.remove('achicar2');
    contenedor5.classList.remove('achicar2');
}



contenedor2.addEventListener('mouseover', agrandar4)
contenedor2.addEventListener('mouseout', igual4)

var agrandar5 = function(){
        
    contenedor1.classList.add('agrandar');

    contenedor2.classList.add('achicar');
    contenedor3.classList.add('achicar2');
    contenedor4.classList.add('achicar2');
    contenedor5.classList.add('achicar2');
   
    
   
}


var igual5 = function(){
contenedor1.classList.remove('agrandar');

    contenedor2.classList.remove('achicar');
    contenedor3.classList.remove('achicar2');
    contenedor4.classList.remove('achicar2');
    contenedor5.classList.remove('achicar2');
}



contenedor1.addEventListener('mouseover', agrandar5)
contenedor1.addEventListener('mouseout', igual5)

    
}())