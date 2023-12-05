console.log("Hola !");

// 1 Es PIEDRA , 2 es PAPEL , 3 es TIJERA.

// Funcion aleatoria para la PC.
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Funcion eleccion de la jugada : 1 es Piedra. 2 es papel y 3 es tijera.
function elect(jugada) {
  let respuesta = "";
  if (jugada == 1) {
    respuesta = "Piedra";
  } else if (jugada == 2) {
    respuesta = "Papel";
  } else if (jugada == 3) {
    respuesta = "tijera";
  } else {
    respuesta = "Mal elegido";
  }
  return respuesta;
}

function jugar() {
  let gana = 0;
  let pierde = 0;

  while (gana < 3 && pierde < 3) {
    let pc = aleatorio(1, 3);
    let jugador = parseInt(prompt("Elegí 1 piedra 2 papel 3 tijera"));

    if (isNaN(jugador) || jugador < 1 || jugador > 3) {
      alert("Por favor, elige un número válido (1, 2 o 3).");
      continue;
    }

    alert("Elegiste " + elect(jugador));
    alert("Pc eligió " + elect(pc));

    if (jugador === pc) {
      alert("Empate");
    } else if (
      (jugador === 1 && pc === 3) ||
      (jugador === 3 && pc === 2) ||
      (jugador === 2 && pc === 1)
    ) {
      alert("Ganaste");
      gana++;
    } else {
      alert("Perdiste");
      pierde++;
    }
  }

  if (gana >= 3) {
    alert("Felicidades! Ganaste la partida.");
  } else {
    alert("Perdiste la partida. Mejor suerte la próxima!");
  }
}

do {
  jugar();
  reiniciarJuego = confirm("Desea jugar nuevamente?");
} while (reiniciarJuego);

alert("Gracias por jugar. Hasta la próxima!");
