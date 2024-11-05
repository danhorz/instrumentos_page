
let gameArea=document.getElementById("game-area");
//se crea el ul
let ul=document.createElement("ul");
//Eje1
function registroDeHermanos()
{
    const cantidadDeHermanos=prompt("Ingrese la cantidad de hermanos:");

    const listaHermanos=[];
    let contador=0;
    while(cantidadDeHermanos>contador)
    {   let nombreDeHermano= prompt("Ingresa el hermano"+contador);
        listaHermanos.push(nombreDeHermano);
        //se ccrea el li
        let li=document.createElement("li");
        // se agrega a ul
        ul.appendChild(li);
        //se añade texto al li
        li.textContent=nombreDeHermano;
        contador++;
    }   
    for(list of listaHermanos)
    { // se agrega ul a game area
      gameArea.appendChild(ul);
    }
}

//Eje2

function colorAleatorioHex() {
    let caracteres = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += caracteres[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function borrar(newDiv)
  {
    gameArea.innerHTML="";
  }



function generarCuadrados()
{  
  /* creacion botn */
  const crearBoton=document.createElement("button");
  crearBoton.textContent="borrar";
  gameArea.appendChild(crearBoton);
  

 


    const cantidadDeCubos=prompt("Ingresa la cantidad de cubos:");
  let temp;
    let contador=0;
    while(cantidadDeCubos>contador)
    {   const newDiv=document.createElement("div");
        newDiv.style.height="100px";
        newDiv.style.width="100px";
        newDiv.style.backgroundColor=colorAleatorioHex();

        document.querySelector("#game-area").appendChild(newDiv);
        temp=newDiv;
        contador++;

    }
    /* Las funciones vacias se usan para instanciar una funcion */
    crearBoton.addEventListener('click',function (){
      borrar(temp);
    });
}

//Eje 3
/* Pídele al usuario que elija una opción entre “piedra”, “papel” o “tijera” utilizando prompt().
Genera una elección aleatoria para la computadora entre las opciones “piedra”, “papel” y “tijera”. 
Para esto, debes pedirle a la IA que te ayude a escribir una función que te genere un número aleatorio.
Compara la elección del usuario y la de la computadora para determinar el resultado:
Piedra vence a tijera
Tijera vence a papel
Papel vence a piedra
Informa al usuario si ganó, perdió o fue un empate con un mensaje claro en la consola o en una alerta. */
function elegirOpcionAleatoria() {
    const opciones = ["piedra", "papel", "tijera"];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
  }


 function evaluacion(eleccion,opcion)
 {
    //piedra
    if(eleccion=="piedra"&& opcion=="tijera")return eleccion+" vence a "+opcion +"  Ganaste";
    if(eleccion=="piedra"&& opcion=="papel")return opcion+" vence a "+ eleccion+"  Perdiste";
    //papel
    if(eleccion=="papel"&& opcion=="tijera")return opcion+" vence a "+ eleccion+" Perdiste";
    if(eleccion=="papel"&& opcion=="piedra")return eleccion+" vence a "+opcion +"  Ganaste";
    //tijera
    if(eleccion=="tijera" && opcion=="papel") return eleccion+" vence a "+opcion +"  Ganaste";
    if(eleccion=="tijera" && opcion=="piedra") return opcion+" vence a "+ eleccion+"  Perdiste";
    if(eleccion==opcion) return "Empate el rival eligio: "+opcion;

 } 

function generadorDeFiugrasDeManos()
{
    const eleccion=prompt("Ingrese su eleccion (piedra, papel, tijera)")

    
   const respuesta= evaluacion(eleccion,elegirOpcionAleatoria());

  const parrafo=document.createElement("p");
  gameArea.appendChild(parrafo)
  parrafo.textContent=respuesta;

  // gameArea.textContent=respuesta;
 
    


}
/* Ejercicio 4 */

/* EJERCICIO 4 */
function ej1()
{

  const añoIngresado=Number(prompt("Ingrese su año de nacimiento de una persona"));
  const añoActual=new Date().getFullYear();
  const edad=añoActual-añoIngresado;
  alert("Tienes "+edad+" años");
}

/* EJERCICIO 5 */
function ej2()
{
  const celsiusIngresada=Number(prompt("Ingrese la temperatura en Celsius"));
  const respuestaFahrenheit=(celsiusIngresada * 9/5) + 32;
  alert(celsiusIngresada+"°C son "+respuestaFahrenheit+"°F");
}

/* EJERCICIO 6 */
function ej3()
{
  let palabraIngresada=prompt("Ingrese palabra");
  let caracter=[]

  let contadorletras=0;
  let contador=0;
    while(contador<palabraIngresada.length)
    {

      caracter[contador]= palabraIngresada.charAt(contador);
     
      contador++;
    }
    for(caracteres of caracter)
    { if(caracteres==='a'|| caracteres==='o'|| caracteres==='e'||caracteres==='i'||caracteres==='u')contadorletras++;
      
    }
    alert(contadorletras);

 
}

/* EJERCICIO 7 */

function eje4()
{
  let contador=1;
  let numero=prompt("Ingrese numero:");
  let string="";
  let respuesta=0;
  while(contador<=10)
  { 
    respuesta=numero*contador;
    string+="\nDebería mostrar: "+numero+" x" +contador+ "= "+respuesta;
   
    contador++;
  }
  alert(string);


}