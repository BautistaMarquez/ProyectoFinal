let botonPlay = document.querySelector("#boton1")
let video = document.querySelector("#video")
let botonPause = document.querySelector("#boton2")
let p = document.querySelector("#p")
console.dir(video)
let botonMuted = document.querySelector("#boton3")


function play() {
    video.play()
    p.innerHTML = ("Duracion video : " + video.duration)
}
function pause() {
    video.pause()
}



