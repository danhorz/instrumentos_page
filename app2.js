/* boton cambiar color */
const btnChangeColor=document.getElementById("btn-change-color");
/* input color */
const inputColor=document.getElementById("input-color");


/* boton presionado */
btnChangeColor.addEventListener("click",function cambiarcolor(){

 
    document.body.style.backgroundColor=inputColor.value;
});

