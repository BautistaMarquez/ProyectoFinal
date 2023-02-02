//video
let botonPlay = document.querySelector("#boton1")
let video = document.querySelector("#video")
let botonPause = document.querySelector("#boton2")
let p = document.querySelector("#p")
let botonMuted = document.querySelector("#boton3")


function play() {
    video.play()
    p.innerHTML = ("Duracion video : " + video.duration)
}
function pause() {
    video.pause()
}

// juego

let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let p3 = document.querySelector("#p3")
let titulo = document.querySelector(".titulo2")
let lista = ["","",""];

function over(event) {
    event.preventDefault();
    console.log("S")
}

function drag(event) {
    event.dataTransfer.setData("Text", event.target.id);
    console.log(event.target.id)
}
function drop(event) {
    if (lista[parseInt(event.target.id)] == "") {
        var dato = event.dataTransfer.getData("text");
        lista[parseInt(event.target.id)] = dato;
        event.target.appendChild(document.getElementById(dato));
        p1.classList.add("desaparecer")
        p2.classList.add("desaparecer")
        p3.classList.add("desaparecer")
    }
    if (lista[0]!= "" && lista[1] != "" && lista[2] != "") {
        if (lista[0] == "imagen1" && lista[1] == "imagen2" && lista[2] == "imagen3") {
             titulo.innerHTML = "Felicitaciones, completaste de forma correcta el juego!!!"
        } else {
            titulo.innerHTML = "No completaste de forma correcta el juego, Vuelve a Intentarlo!!!"
        }
    }
}


function reinicio() {
    window.location.reload();
}