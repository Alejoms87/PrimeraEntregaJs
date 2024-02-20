// Juego del dado primera Pre-Entrega

//Este es un juego de dados en donde el usuario va a ingresar su nombre o no, y va a jugar contra la Pc
//En el juego, el usuario puede elegir la cantidad de veces que quiere jugar contra la Pc y si  quiere volver a jugar

let seguirJugando = true;

while (seguirJugando) {
  let correctas_usuario = 0;
  let correctas_maquina = 0;
  let empates = 0;

  alert("Bienvenido al juego de tirar el dado");
  let opciones = prompt(
    "Ingrese 1 para jugar con comenzar \nIngrese  'salir' para salir del juego" );

  if (opciones == 1) {
    nombre = prompt("Ingrese su nombre");
    if (nombre == ''){
      nombre = "Anonimo"
    }
    tiradas = prompt("Cuantas veces quiere jugar contra la Pc?");
    for (let i = 0; i < tiradas; i++) {
      let numero_usuario = Math.floor(Math.random() * 6) + 1;
      let numero_maquina = Math.floor(Math.random() * 6) + 1;
      if (numero_usuario > numero_maquina) {
        correctas_usuario++;
        alert(
          "Felicitaciones vas " + correctas_usuario + " a " + correctas_maquina);
        continue;
      } else if (numero_maquina > numero_usuario) {
        correctas_maquina++;
        alert( "Lo siento " + nombre + " ahora van: " + correctas_usuario + " a " + correctas_maquina);
        continue;
      } else {
        empates++;
        alert( "Hubo un empate entre " + nombre + " y la Pc, ahora van: " + correctas_usuario + "  a " + correctas_maquina );
        continue;
      }
    }
    alert(
      "El numero de partidas ganadas por " + nombre + " es: " + correctas_usuario + " y el de la Pc es: " + correctas_maquina + " mientras que el numero de partidas empates es de: " + empates );

    if (correctas_usuario > correctas_maquina) {
      alert("Felicitaciones " + nombre + " sos el ganador");
      seguirJugando = prompt("Quiere seguir jugando?");
      if (confirm("Quiere seguir jugando?")) {
        alert("Ok Volvamos al menu");
        }else {
        seguirJugando = false;
        }
    } else if (correctas_usuario == correctas_maquina) {
      alert("Hubo un empate, volve a jugar!");
      if (confirm("Quiere seguir jugando?")) {
        alert("Ok Volvamos al menu");
        }else {
        seguirJugando = false;
        }
    } else {
      alert("Te gano la maquina!");
      if (confirm("Quiere seguir jugando?")) {
        alert("Ok Volvamos al menu");
        }else {
        seguirJugando = false;
        }
    }
  
  } else if (opciones.toLocaleLowerCase() === "salir") {
    let salir = confirm("Quiere salir del juego");
    if (salir) {
      alert("Gracias por jugar");
      seguirJugando = false;
    }
  } else {
    alert("Por favor ingrese una opcion correcta");
  }
}
alert("Fin del juego");
