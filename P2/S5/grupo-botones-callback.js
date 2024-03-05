console.log("Ejecutando JS...");

const botones = document.getElementsByClassName("digito")

//-- Función de retrollamada de los botones
//-- botones de la clase dígito
function digito(value)
{
  console.log("Valor: " + value);
}

for (let boton of botones) {

  //-- Establecer la función de llamada del botón i
  //-- El parámetro ev.target contiene el boton
  //-- que ha recibido el clic
  boton.onclick = (ev) => {
    digito(ev.target.value)
  }
}