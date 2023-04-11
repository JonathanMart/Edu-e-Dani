const btnMusic = document.getElementById("play-music-modal")
const btnPause = document.getElementById("btnPause")
const btnPlay = document.getElementById("btnPlay")
const audio = new Audio ('assets/musica.mp3')



function tocarMusica() {
    audio.play()
}






function  playMusica() {
    audio.play()
    btnPlay.classList.add(".hide")


    btnPause.classList.remove(".hide")
    console.log("Play")
}


function pauseMusica() {
    audio.pause()

    btnPause.classList.add(".hide")

    btnPlay.classList.remove(".hide")
    console.log("Pause")
   
}

