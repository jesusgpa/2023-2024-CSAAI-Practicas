//-- Elementos del DOM
const canvas = document.getElementById("ctiro");


//-- Acceder al botón de disparo
const btnLanzar = document.getElementById("btnLanzar");

//-- Acceder al botón de iniciar
const btnIniciar = document.getElementById("btnIniciar");

//-- Sonidos
//-- Crear los elementos de sonido
const rebote_sound = new Audio('rebote.mp3');

canvas.width = 800;
canvas.height = 400;

//-- Obtener el contexto del canvas 2d
const ctx = canvas.getContext("2d");


//-- Coordenadas iniciales del proyectil
let xop = 5;
let yop = 340;
let xp = xop;
let yp = yop;

//-- Coordenadas iniciales del objetivo
let xomin = 200;
let xomax = 770;
let xo = 500; //getRandomXO(xomin,xomax);
let yo = 370;


//-- Dibujar el proyectil
dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil

//-- Dibujbar el objetivo
dibujarO(xo,yo); // Pintar el objetivo

//-- Velocidad del proyectil
let velpx = 5;
let velpy = 1;

//-- Función principal de actualización
function lanzar() 
{
  //-- Implementación del algoritmo de animación:

    //-- 1) Actualizar posición de los elementos
    

    //-- Condición de rebote en extremos verticales del canvas
    if (xp < 0 || xp >= (canvas.width - 25) ) {
        bound_sound();
        velpx = -velpx;
    }

    //-- Condición de rebote en extremos horizontales del canvas
    if (yp <= 0 || yp > canvas.height - 25 ) {
        bound_sound();
        velpy = -velpy;
    }

    //-- Actualizar la posición
    xp = xp + velpx;
    yp = yp + velpy;

    //-- Colisión?¿?¿¿¿?¿
    if (xp - xo < 10 ) {
        dibujarP(xp, yp, 50, 50, "yellow"); // Pintar el proyectil
    } 

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Pintar los elementos en el canvas
  dibujarP(xp, yp, 50, 50, "red"); // Pintar el proyectil
  dibujarO(xo,yo); // Pintar el objetivo

  //-- 4) Repetir
  requestAnimationFrame(lanzar);
}

function bound_sound() {

    rebote_sound.currentTime = 0;
    rebote_sound.play();
}

//-- función para pintar el proyectil
function dibujarP(x,y,lx,ly,color) {

    //-- Pintando el proyectil
    ctx.beginPath();

    //-- Definir un rectángulo de dimensiones lx x ly,
    ctx.rect(x, y, lx, ly);

    //-- Color de relleno del rectángulo
    ctx.fillStyle = color;

    //-- Mostrar el relleno
    ctx.fill();

    //-- Mostrar el trazo del rectángulo
    ctx.stroke();

    ctx.closePath();
}

//-- función para pintar el objetivo
function dibujarO(x,y) {

    //-- Pintando el objetivo
    ctx.beginPath();

    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'red';

    //-- Dibujar el relleno
    ctx.fill()    

    //-- Dibujar el trazo
    ctx.stroke();

    ctx.closePath();
}

//-- Función de retrollamada del botón de disparo
btnLanzar.onclick = () => {
    lanzar();
}

//-- Función de retrollamada del botón de inicio
btnIniciar.onclick = () => {

    //-- Reinicio
    location.reload();

    //-- Dibujar el proyectil
    dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil


}