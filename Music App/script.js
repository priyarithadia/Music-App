const img = document.querySelector("img")
const music = document.querySelector("audio");
const play = document.getElementById('play');
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name: 'song-1',
        title: "Always You",
        artist: "Louis Tomlinson"
    },
    {
        name: 'song-2',
        title: "Defenceless",
        artist: "Louis Tomlinson"
    },
    {
        name: 'song-3',
        title: "Slow Hands",
        artist: "Naill Horan"
    },
    {
        name: 'song-4',
        title: "Girl Crush",
        artist: "Harry Styles"
    },
];

let isPlaying = false;

//For Play Function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add("anime")
};

//for pause function

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play',);
    img.classList.remove("anime")
};

play.addEventListener('click', () => {
    // if(isPlaying){
    //     pauseMusic();
    // }else {
    //     playMusic();
    // }

    isPlaying ? pauseMusic() : playMusic();
});

//changing Music data

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpeg";
};

//
songIndex = 0;
// loadSong(songs[2]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;           
    loadSong(songs[songIndex]);
    playMusic()
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;           
    loadSong(songs[songIndex]);
    playMusic()
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);