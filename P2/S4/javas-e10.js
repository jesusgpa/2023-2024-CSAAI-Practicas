console.log("Ejecutando JS...");

//-- Obtener el párrafo
const test = document.getElementById('test');

//-- Función de retrollamada de la pulsación del párrafo
test.onclick = () => {
    console.log("Click!");

    //-- Cambiar el color del fondo...
    //-- Si no tenía color asignado ponemos amarillo
    if (test.style.backgroundColor == "") {
        test.style.backgroundColor = "yellow";
    }
    //-- Si ya tiene color se lo quitamos
    else {
        test.style.backgroundColor = "";
    }

}

console.log("JS Cargado ...");