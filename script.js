// console.log("welcome to my website");
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "song/1.mp3" },
    { songName: "Cielo - Huma-Huma", filePath: "song/2.mp3" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "song/3.mp3" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "song/4.mp3" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "song/5.mp3" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "song/6.mp3" }
]
// no change
songItems.forEach((element, i)=>{
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})
// no change

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
})
//no change
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',() =>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
//no change

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

const menubar = document.getElementsByClassName('menubar')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]
menubar.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})