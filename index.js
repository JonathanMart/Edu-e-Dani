const btnMusic = document.getElementById("play-music-modal")

const btnPlay = document.getElementById("btnPlay")
const audio = new Audio ('music/musica.mp3')



//abrir musica pelo modal
function tocarMusica() {
    audio.play()


}


// array do botao play pause da pagina, fora do modal
const funcoesMusic = [

    function() {
      audio.play()
    },
    function() {
      audio.pause()
    }

  ];
  
  let contador = 0;
  

  
 function controlerMusic () {
    funcoesMusic[contador]();
    contador++;
    if (contador >= funcoesMusic.length) {
      contador = 0;
    }
  };









