
console.log("Ejecutando JS...");

const formulario = document.getElementById("formulario");
const boton = document.getElementById("boton");

boton.onclick = (event) => {
  event.preventDefault(); // Evitar el envío del formulario

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  //-- Validar nombre y email
  if (nombre.trim() === "" || email.trim() === "") {
    alert("Por favor, complete todos los campos.");
  } else {
    formulario.submit(); // Enviar el formulario
    formulario.reset(); // Reiniciar formulario
    alert("Formulario enviado correctamente.");    
  }
}
