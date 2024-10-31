
//Eje1
function registroDeHermanos()
{
    const cantidadDeHermanos=prompt("Ingrese la cantidad de hermanos:")

    const listaHermanos=[];
    let contador=0;
    while(cantidadDeHermanos>contador)
    {   let nombreDeHermano= prompt("Ingresa el hermano"+contador);
        listaHermanos.push(nombreDeHermano);
        contador++;
    }   
    for(list of listaHermanos)
    {
        console.log(list);
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



function generarCuadrados()
{
    const cantidadDeCubos=prompt("Ingresa la cantidad de cubos:");

    let contador=0;
    while(cantidadDeCubos>contador)
    {   const newDiv=document.createElement("div");
        newDiv.style.height="100px";
        newDiv.style.width="100px";
        newDiv.style.backgroundColor=colorAleatorioHex();

        document.querySelector("body").appendChild(newDiv);

        contador++;
    }
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

   alert(respuesta);
    


}