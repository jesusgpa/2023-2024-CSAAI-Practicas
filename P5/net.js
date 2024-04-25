// Variables de trabajo
const canvas = document.getElementById('networkCanvas');
const ctx = canvas.getContext('2d');

let redAleatoria;

const nodeRadius = 40;
const nodeRandomDelay = 1000;
const numNodos = 5;
const nodeConnect = 2


let nodoOrigen = 0, nodoDestino = 0;
let rutaMinimaConRetardos;

const pipeRandomWeight = 100; // No hay retardo entre nodos 100


// Localizando elementos en el DOM
const btnCNet = document.getElementById("btnCNet");
const btnMinPath = document.getElementById("btnMinPath");

// Clase para representar un nodo en el grafo
class Nodo {

    constructor(id, x, y, delay) {
      this.id = id; // Identificador del nodo
      this.x = x; // Coordenada X del nodo
      this.y = y; // Coordenada Y del nodo
      this.delay = delay; // Retardo del nodo en milisegundos
      this.conexiones = []; // Array de conexiones a otros nodos
    }
    
    // Método para agregar una conexión desde este nodo a otro nodo con un peso dado
    conectar(nodo, peso) {
      this.conexiones.push({ nodo, peso });
    }
  
  }

  // Función para generar una red aleatoria con nodos en diferentes estados de congestión
function crearRedAleatoriaConCongestion(numNodos, numConexiones) {
  
    const nodos = [];
    let x = 0, y = 0, delay = 0;
    let nodoActual = 0, nodoAleatorio = 0, pickNode = 0, peso = 0;
  
    // Generamos los nodos
    for (let i = 0; i < numNodos; i++) {
        x = randomNumber(nodeRadius, (canvas.width - nodeRadius)); // Generar coordenada x aleatoria
        y = randomNumber(nodeRadius, (canvas.height - nodeRadius)); // Generar coordenada y aleatoria
        //delay = generarRetardo(); // Retardo aleatorio para simular congestión
        peso = pipeRandomWeight; // El mismo peso para todas las conexiones
        nodos.push(new Nodo(i, x, y, delay)); // Generar un nuevo nodo y añadirlo a la lista de nodos de la red
    }
  
    // Conectamos los nodos
    for (let i = 0; i < numNodos; i++) {
      nodoActual = nodos[i];
      for (let j = 0; j < numConexiones; j++) {
        pickNode = Math.floor(Math.random() * numNodos);
        nodoAleatorio = nodos[pickNode];
        peso = Math.random() * 100; // Peso aleatorio para simular la distancia entre nodos
        nodoActual.conectar(nodoAleatorio, peso);
      }
    }
  
    return nodos;
  }

// Generar un número aleatorio dentro de un rango
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Función para generar un retardo aleatorio entre 0 y 1000 ms
function generarRetardo() {
    return Math.random() * nodeRandomDelay;
}

// Dibujar la red en el canvas
function drawNet(nnodes) {
    // Dibujamos las conexiones entre nodos
    nnodes.forEach(nodo => {
      nodo.conexiones.forEach(({ nodo: conexion, peso }) => {
        ctx.beginPath();
        ctx.moveTo(nodo.x, nodo.y);
        ctx.lineTo(conexion.x, conexion.y);
        ctx.stroke();
      });
    });
  
    let nodoDesc; // Descripción del nodo

    // Dibujamos los nodos
    nnodes.forEach(nodo => {
      ctx.beginPath();
      ctx.arc(nodo.x, nodo.y, nodeRadius, 0, 2 * Math.PI);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.stroke();
      ctx.font = '12px Arial';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      nodoDesc = "N" + nodo.id + " delay " + Math.floor(nodo.delay);
      ctx.fillText(nodoDesc, nodo.x, nodo.y + 5);
    });    

}


// Función de callback para generar la red de manera aleatoria
btnCNet.onclick = () => {

    // Generar red de nodos con congestión creada de manera aleatoria redAleatoria
    // Cada nodo tendrá un delay aleatorio para simular el envío de paquetes de datos
    redAleatoria = crearRedAleatoriaConCongestion(numNodos, nodeConnect);
  
    // Limpiamos el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Dibujar la red que hemos generado
    drawNet(redAleatoria);
  
}

// Función de callback para generar la ruta mínima
btnMinPath.onclick = () => {

    // Supongamos que tienes una red de nodos llamada redAleatoria y tienes nodos origen y destino
    nodoOrigen = redAleatoria[0]; // Nodo de origen
    nodoDestino = redAleatoria[numNodos - 1]; // Nodo de destino
  
    // Calcular la ruta mínima entre el nodo origen y el nodo destino utilizando Dijkstra con retrasos
    rutaMinimaConRetardos = dijkstraConRetardos(redAleatoria, nodoOrigen, nodoDestino);
    console.log("Ruta mínima con retrasos:", rutaMinimaConRetardos);
  
  }
