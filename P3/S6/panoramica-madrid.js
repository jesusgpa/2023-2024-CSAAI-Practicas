let img = new Image();

//-- Array que almacena el nombre de las imágenes
const image_sources = [];

src_1 = "capitan_meadows_yosemite_national_park.jpg";
src_2 = "panoramica-madrid-01.jpg";
src_3 = "panoramica-madrid-02.jpg";
src_4 = "panoramica-madrid-03.jpg";
src_5 = "panoramica-madrid-04.jpg";

//image_sources.push(src_1);
image_sources.push(src_2);
image_sources.push(src_3);
image_sources.push(src_4);
image_sources.push(src_5);

function get_random_img_source () {

    let max = image_sources.length - 1;
    let imgPick = Math.floor(Math.random() * max);

    return image_sources[imgPick];

}

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.
img.src = get_random_img_source();

console.log(img.src);

const canvasXSize = 800;
const canvasYSize = 400;
const speed = 30; // lower is faster
const scale = 1.05;
const y = -4.5; // vertical offset

// Main program
const dx = 0.75;
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;
let ctx;

// Get canvas context
ctx = document.getElementById("canvas").getContext("2d");

function set_canvas_image() {
 
  imgW = img.width * scale;
  imgH = img.height * scale;

  if (imgW > canvasXSize) {
    // Image larger than canvas
    x = canvasXSize - imgW;
  }

  // Check if image dimension is larger than canvas
  clearX = Math.max(imgW, canvasXSize);
  clearY = Math.max(imgH, canvasYSize);

}

function draw() {
  ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

  // If image is <= canvas size
  if (imgW <= canvasXSize) {
    // Reset, start from beginning
    if (x > canvasXSize) {
      x = -imgW + x;
    }

    // Draw additional image1
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }

    // Draw additional image2
    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  } else {
    // Image is > canvas size
    // Reset, start from beginning
    if (x > canvasXSize) {
      x = canvasXSize - imgW;
    }

    // Draw additional image
    if (x > canvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }

  // Draw image
  ctx.drawImage(img, x, y, imgW, imgH);

  // Amount to move
  x += dx;

  // Encuentra una condición de cambio de imagen
  //console.log( 'x: ' + x + ' imgW: ' + imgW + ' Math.abs(x): ' + Math.abs(x) );
  //console.log('x: ' + x + ' dx: ' + dx)

  // Condición de cambio de imagen
  if ( Math.abs(x) <= dx ) {
    
    last_img = img.src;
    img.src = get_random_img_source();  

    while(last_img == img.src) {
      img.src = get_random_img_source();
    }

    set_canvas_image();
  }

}

set_canvas_image();

setInterval(draw, speed);
