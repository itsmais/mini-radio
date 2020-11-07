let playIcon = document.getElementById("play-audio");
let trackNumber = 0;
let playing = false;
let tracksArray = [
  {
    "song-title":"daniel burbank - sorry i like you"
  },
  {
    "song-title":"scandinavianz - delta dawn"
  },
  {
    "song-title":"mellomusicnl - when you smile"
  },
  {
    "song-title":"scandinavianz - gualala"
  }
];

let tracks = [];
for (let i in tracksArray){
  tracks.push(`<audio id="music"><source src="music/${tracksArray[i]["song-title"]}.mp3" type="audio/mpeg"></audio>`,);
}

let audio = document.getElementById("music-container");
audio.innerHTML=tracks[0];
let currentTrack = document.getElementById("music");

function playAudio() {
  displaySongTitle();
  if (!playing){
    currentTrack.play();
    playIcon.innerHTML = `<i class="fa fa-3x fa-pause"></i>`;
    playing = true;
  }
  else {
    currentTrack.pause();
    playIcon.innerHTML = `<i class="fa fa-3x fa-play"></i>`;
    playing = false;
  }
}

function backwardAudio(){
  playIcon.innerHTML = `<i class="fa fa-3x fa-pause"></i>`;
  trackNumber=(trackNumber+1)%tracks.length;
  displaySongTitle();
  audio.innerHTML=tracks[trackNumber];
  currentTrack = document.getElementById("music");
  currentTrack.play();
}

function forwardAudio(){
  playIcon.innerHTML = `<i class="fa fa-3x fa-pause"></i>`;
  if (trackNumber==0){
    trackNumber=tracks.length-1;
  }
  else {
    trackNumber=(trackNumber-1)%tracks.length;
  }
  displaySongTitle();
  audio.innerHTML=tracks[trackNumber];
  currentTrack = document.getElementById("music");
  currentTrack.play();
}

function displaySongTitle(){
  document.getElementById("song-title").innerHTML=tracksArray[trackNumber]["song-title"];
}
