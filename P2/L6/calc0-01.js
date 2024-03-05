console.log("Ejecutando JS...");


//-- Elementos de la interfaz de la calculadora
display = document.getElementById("display")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Funciones de retrollamada de los botones
//-- Cada vez que se aprieta un botón se actúa
//-- sobre la cadena: añadiendo dígito, operador +
//-- poniendo a cero o evaluando la expresión

// -- Insertar dígito 1
boton1.onclick = () => {
  display.innerHTML += "1";
}

//-- Insertar dígito 2
boton2.onclick = () => {
  display.innerHTML += "2";
}

//-- Insertar símbolo de sumar
suma.onclick = () => {
  display.innerHTML += "+";
}

//-- Evaluar la expresión
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresión
clear.onclick = () => {
  display.innerHTML = "0";
}