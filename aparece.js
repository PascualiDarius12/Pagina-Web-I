
/*Funcion para cuando haga scroll aparezcan las cosas en la pagina principal*/



/*defino en variables el contenedor que quiero hacer que aparezca 
y una variable con el tamano de la pantalla del navegador*/

var cajatarjetas = document.getElementById('scroll');
var textoprincipal = document.getElementById('textoprincipal');
var imagen = document.getElementById('imagen');

var alturaPantalla = window.innerHeight;


/*Un if para comprobar si la partre superio de nuestro contenedor 
es menor que la altura de la pantalla aplicamos la clase .visible
si no quitamos la clase .visible*/


var aparece1 = function () {



    if (cajatarjetas.getBoundingClientRect().top < alturaPantalla) {
        cajatarjetas.classList.add('visible');
    } else {
        cajatarjetas.classList.remove('visible')
    }

}




var aparece = function () {
    aparece1();


}



/*evento para cuando detecte el scroll active la funcion*/




window.addEventListener('scroll', aparece)

//eststo es para que el texto aparezca 2sg despues de haber cargado la pagina
var aparecetodo = function () {
    setTimeout(function () {
        textoprincipal.classList.add('visible');

    }, 2000);

}

aparecetodo();

//esto e spara que las imagenes cambien cada cierto tiempo
var imagen1 = '../Pagina-Web-I/Imagenes/blog-que-es-la-fonoaudiologia.jpg';
var imagen2 = '../Pagina-Web-I/Imagenes/doctor-trabajo.jpg'
var imagen3 = '../Pagina-Web-I/Imagenes/vista-frontal-valor-cartera-mujer-forma-corazon.jpg'

const arrayimagenes = new Array(imagen1, imagen2, imagen3);
var cambairImg = function () {
    var i = 0;

    while (i < 3) {
        setTimeout(function () {
           
            imagen.setAttribute('src', arrayimagenes[i])
            i++;
            if (i = 3) {
                i = 0
            }


        }, 2000)
    }
}



/*
cambairImg();*/





