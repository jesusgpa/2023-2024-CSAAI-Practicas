console.log("Ejecutnado JS...");

//-- Obtener el parrafo
const pbt1 = document.getElementById('pbt1');

//-- Obtener el parrafo
const pbt2 = document.getElementById('pbt2');

//-- Obtener el botón 1
const bt1 = document.getElementById('bt1');

//-- Obtener el botón 2
const bt2 = document.getElementById('bt2');

//-- Funcion de retrollamada botón 1
bt1.onclick = () => {
    //console.log("Click desde el botón 1.");
    pbt1.innerHTML+=" 1";

    //-- Cambiar el color del fondo...
    //-- Si no tenía color asignado ponemos amarillo
    if (pbt1.style.backgroundColor == "") {
        pbt1.style.backgroundColor = "yellow";
    }
    //-- Si ya tiene color se lo quitamos
    else {
        pbt1.style.backgroundColor = "";
    }
}

//-- Función de retrollamada botón 2
bt2.onclick = () => {
    pbt2.innerHTML+=" 2";
}