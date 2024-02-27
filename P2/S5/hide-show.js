console.log("Ejecutando JS...");

const elemento = document.getElementById("elemento");
const boton = document.getElementById("boton");

let visible = false;

boton.onclick = () => {
  console.log("Clic!");

  //-- Alternar visibilidad
  if (visible) {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "block";
  }
  visible = !visible;
}