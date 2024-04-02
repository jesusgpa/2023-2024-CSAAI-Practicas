console.log("Ejecutando JS...");

const video = document.getElementById("video");
const play = document.getElementById("play");
const big = document.getElementById("big");
const small = document.getElementById("small");
const time = document.getElementById("time2");
const time10 = document.getElementById("time10");
const tRange = document.getElementById("timeRange");

play.onclick = () => {
 if (video.paused)
   video.play()
 else {
   video.pause()
 }
}

big.onclick = () => {
 video.width = 500;
 video.height = 300;
}

small.onclick = () => {
 video.width = 300;
 video.height = 200;
}

time.onclick = () => {
 video.currentTime = 2;
}

time10.onclick = () => {
    video.currentTime = 10;
}

tRange.onchange = () => {
    video.currentTime = tRange.value;
}