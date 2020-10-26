const video = document.querySelector('.video');
const btnPausePlay = document.getElementById('play-pause');
const img = document.querySelector('#play-pause img');
const barreOrange = document.querySelector('.barre-orange');
const juice = document.querySelector('.juice');
const fullScreen = document.getElementById('fullscreen');
const muteBtn = document.getElementById('mute');
const volumeSlider = document.getElementById('volume-slider');


btnPausePlay.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);

function togglePlayPause(){
    if(video.paused){
        img.src = "ressources/pause.svg";
        video.play();
    } 
    else {
        img.src = "ressources/play.svg";
        video.pause();
    }
}

// Barre Orange 

video.addEventListener('timeupdate', () => {

    let juicePos = video.currentTime / video.duration;

    juice.style.width = juicePos * 100 + "%";

    if(video.ended){
        img.src = "ressources/play.svg";
    }
})

// Clique Barre Orange Pour positionner tette de lecture

let rect = barreOrange.getBoundingClientRect(); // Donne la position de la barre orange
let largeur = rect.width; // 0 - 800 Largeur de la barre orange

barreOrange.addEventListener('click', (e) => {

    let x = e.clientX - rect.left; // Egale tete de lecture plus margin left et on soustrait la margin left

    let widthPercent = ((x*100/largeur));
    console.log(widthPercent);

    let durationVideo = video.duration;
    
    // position en seconde par rapport aux pourcentage. 
    video.currentTime = durationVideo * (widthPercent / 100 );
})

// Volume

volumeSlider.addEventListener('change', () => {

    video.volume = volumeSlider.value / 100;
    console.log(video.volume);

}
);

// mute 

muteBtn.addEventListener('click', () => {

    if(video.muted){
        video.muted = false;
        muteBtn.innerText = "Mute";
    } 
    else {
        video.muted = true;
        muteBtn.innerText = "Unmute";
    }
})

// Resize

// Donne des nouvelle valeur du curseur car la taille est plus grande

window.addEventListener('resize', () => {
    let rect = barreOrange.getBoundingClientRect();
    let largeur = rect.width;
})


video.addEventListener('dblclick', () => {
    video.requestFullscreen();
})

fullScreen.addEventListener('click', () => {
    video.requestFullscreen();
})


//DoubleClique






