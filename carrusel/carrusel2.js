




    var servicio1 = document.getElementById('servicio1');
    var servicio2 = document.getElementById('servicio2');
    var servicio3 = document.getElementById('servicio3');
    var servicio4 = document.getElementById('servicio4');
    var servicio5 = document.getElementById('servicio5');
    var botizq = document.getElementById('izq');
    var botder = document.getElementById('der');
    const variablesCss = document.documentElement.style; // traer todas las variables css a esta variable

    var mover = 0;

    const arreglo = new Array(servicio1, servicio2, servicio3, servicio4, servicio5);
    var i = 0;

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






    botder.addEventListener('click', girarDer)
    botizq.addEventListener('click', girarIzq)





