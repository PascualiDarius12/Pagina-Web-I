var servicio1 = document.getElementById('servicio1');
var servicio2 = document.getElementById('servicio2');
var servicio3 = document.getElementById('servicio3');
var servicio4 = document.getElementById('servicio4');
var servicio5 = document.getElementById('servicio5');
var botizq = document.getElementById('izq');
var botder = document.getElementById('der');
var titulo = document.getElementById('titulo');
var texto = document.getElementById('texto');
var imagenFondo = document.getElementById('imagenFondo');
//const variablesCss = document.documentElement.style; // traer todas las variables :root del css a esta variable



var mover = 0;

const arreglo = new Array(servicio1, servicio2, servicio3, servicio4, servicio5);//arreglo para las tarjetas de servcios
var i = 0;
//titulos
const titulo1 = "Kinesiologia";
const titulo2 = "Fonoaudiologia";
const titulo3 = "Psicologia";
const titulo4 = "Hidroterapia";
const titulo5 = "Medicina";
//textos
const texto1 = "La kinesiología​ es el estudio científico del movimiento del cuerpo. La kinesiología aborda los principios y mecanismos de movimientos fisiológicos, biomecánicos y psicodinámicos."
const texto2 = "Las Fonoaudiólogas y los Fonoaudiólogos son profesionales encargados de prevención, promoción, evaluación, diagnóstico, tratamiento intervención e investigación en el ámbito de la de la comunicación, lenguaje, habla, voz, sistema auditivo y vestibular, deglución y motricidad orofacial."
const texto3 = "La Psicología es una carrera que provee la capacidad de comprender los diferentes comportamientos humanos brindando distintas formas de abordajes y enfoques en la búsqueda de solucionar sus problemas y mejorar su calidad de vida, preparando a nuestros egresados para elegir entre diferentes caminos profesionales."
const texto4 = "La terapia acuática o hidroterapia es un tipo de tratamiento que utiliza el agua para relajar y fortalecer las articulaciones, aliviar posibles dolores y promover el movimiento corporal."
const texto5 = "La medicina ​ es la ciencia de la salud dedicada a la prevención, diagnóstico, pronóstico y tratamiento de las enfermedades, lesiones y problemas de salud de los seres humanos."
//url's de imagenes
const url1 = "url('../Imagenes/kinesiologia.jpg')";
const url2 = "url('../Imagenes/fonoaudiologia.jpg')"
const url3 = "url('../Imagenes/psicologia.jpeg')";
const url4 = "url('../Imagenes/hidroterapia.jpg')";
const url5 = "url('../Imagenes/medicina.jpg')";
//arreglo para los textos de cada servicio

const textos = new Array(texto1,texto2,texto3,texto4,texto5);

//arreglo para los titulos de cada servicio
const titulos = new Array(titulo1,titulo2,titulo3,titulo4,titulo5);

//arreglo para url's de imagenes para el fondo

const urles = new Array(url1,url2,url3,url4,url5);


//funcion para remover y agregar las claces servicios y asi generar una especie de trancicion.

var girarDer = function () {
        


    arreglo[i].classList.remove('servicio1');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.remove('servicio2');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.remove('servicio3');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.remove('servicio4');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.remove('servicio5');
    if(i<4){
        i++;
     }else{
         i = 0;
     }


    arreglo[i].classList.add('servicio2');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.add('servicio3');
    titulo.innerHTML=titulos[i];
    texto.innerHTML=textos[i];
    imagenFondo.style.backgroundImage = urles[i];
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.add('servicio4');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.add('servicio5');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.add('servicio1');
    




    





}



var girarIzq = function () {

    
    //variablesCss.setProperty('-mover-', '50%') //asignar vamor a la variable :root "-mover-" para que cambie en css
    
    if(i<4){
        i++;
     }else{
         i = 0;
     }


    arreglo[i].classList.remove('servicio2');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.remove('servicio3');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.remove('servicio4');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.remove('servicio5');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.remove('servicio1');
    if(i<4){
        i++;
     }else{
         i = 0;
     }


    arreglo[i].classList.add('servicio1');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.add('servicio2');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.add('servicio3');
    titulo.innerHTML=titulos[i];
    texto.innerHTML=textos[i];
    imagenFondo.style.backgroundImage = urles[i];
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.add('servicio4');
    if(i<4){
        i++;
     }else{
         i = 0;
     }

    arreglo[i].classList.add('servicio5');
    if(i<4){
        i++;
     }else{
         i = 0;
     }
    



    





}







botizq.addEventListener('click', girarIzq)
botder.addEventListener('click', girarDer)





