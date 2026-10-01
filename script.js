/* ==================================================
   PLAYLIST
   YOUR ORIGINAL SONGS + THEIR ORIGINAL COVERS
================================================== */

const songs = [

    {
        title: "Very Very Much",
        artist: "Our memories",
        file: "very_very_much.ogg",
        cover: "song8.jpg"
    },

    {
        title: "Oke Oke",
        artist: "Our memories",
        file: "okeoke.ogg",
        cover: "song9.jpg"
    },

    {
        title: "Mooo 1",
        artist: "Our memories",
        file: "mooo1.ogg",
        cover: "song10.jpg"
    },

    {
        title: "Mooo 2",
        artist: "Our memories",
        file: "mooo2.ogg",
        cover: "song11.jpg"
    },

    {
        title: "Mooo 3",
        artist: "Our memories",
        file: "mooo3.ogg",
        cover: "song12.jpg"
    },

    {
        title: "Mooo 4",
        artist: "Our memories",
        file: "mooo4.ogg",
        cover: "song13.jpg"
    },

    {
        title: "Mooo 5",
        artist: "Our memories",
        file: "mooo5.ogg",
        cover: "song14.jpg"
    },

    {
        title: "Mooo 6",
        artist: "Our memories",
        file: "mooo6.ogg",
        cover: "song15.jpg"
    },

    {
        title: "Ma Tumse Pyar Karta Hu",
        artist: "Our memories",
        file: "matumsepyarkartahu2.ogg",
        cover: "song16.jpg"
    },

    {
        title: "Ma Tumse Pyar Karta Hu",
        artist: "Our memories",
        file: "matumsepyarkartahu.ogg",
        cover: "song17.jpg"
    },

    {
        title: "Karta",
        artist: "Our memories",
        file: "karta.ogg",
        cover: "song18.jpg"
    },

    {
        title: "I Appreciate",
        artist: "Our memories",
        file: "iappreciate.ogg",
        cover: "song19.jpg"
    },

    {
        title: "How Was Your Day",
        artist: "Our memories",
        file: "howwasyourday.ogg",
        cover: "song20.jpg"
    },

    {
        title: "Horosho",
        artist: "Our memories",
        file: "horosho.ogg",
        cover: "song21.jpg"
    },

    {
        title: "Horosho 2",
        artist: "Our memories",
        file: "horosho2.ogg",
        cover: "song22.jpg"
    },

    {
        title: "Horosho 3",
        artist: "Our memories",
        file: "horosho3.ogg",
        cover: "song23.jpg"
    },

    {
        title: "Acha",
        artist: "Our memories",
        file: "acha.ogg",
        cover: "song24.jpg"
    },

    {
        title: "Achcha",
        artist: "Our memories",
        file: "achcha.ogg",
        cover: "song25.jpg"
    },

    {
        title: "Ahahaha",
        artist: "Our memories",
        file: "ahahaha.ogg",
        cover: "song26.jpg"
    },

    {
        title: "Ahahaha 2",
        artist: "Our memories",
        file: "ahahaha2.ogg",
        cover: "song27.jpg"
    },

    {
        title: "Ahahaha 3",
        artist: "Our memories",
        file: "ahahaha3.ogg",
        cover: "song28.jpg"
    },

    {
        title: "Ahhhh",
        artist: "Our memories",
        file: "ahhhh.ogg",
        cover: "song29.jpg"
    },

    {
        title: "Ayueon Meows Playfully",
        artist: "Ayueon",
        file: "ayueon_meows_playfully.ogg",
        cover: "song30.jpg"
    },

    {
        title: "Ayueon Meowing",
        artist: "Ayueon",
        file: "ayueon_meowing.ogg",
        cover: "song31.jpg"
    },

    {
        title: "Ayueon Laughing",
        artist: "Ayueon",
        file: "ayueon_laughing.ogg",
        cover: "song32.jpg"
    },

    {
        title: "Bakhut Bakhut",
        artist: "Our memories",
        file: "bakhut_bakhut.ogg",
        cover: "song33.jpg"
    }

];


let currentSong = 0;

let repeatSong = false;

const audio =
    document.getElementById("audioPlayer");


/* ==================================================
   WELCOME
================================================== */

function openMenu() {

    document
        .getElementById("welcomeScreen")
        .classList.add("hidden");


    document
        .getElementById("menuScreen")
        .classList.remove("hidden");

}


/* ==================================================
   BACK TO MENU
================================================== */

function backToMenu(pageId) {

    audio.pause();


    document
        .getElementById(pageId)
        .classList.add("hidden");


    document
        .getElementById("menuScreen")
        .classList.remove("hidden");

}


/* ==================================================
   OPEN PLAYLIST
================================================== */

function openPlaylist() {

    document
        .getElementById("menuScreen")
        .classList.add("hidden");


    document
        .getElementById("playlistPage")
        .classList.remove("hidden");


    loadSong(currentSong);

}


/* ==================================================
   LOAD SONG
================================================== */

function loadSong(index) {

    currentSong = index;


    const song =
        songs[currentSong];


    audio.src =
        song.file;


    document
        .getElementById("songTitle")
        .textContent =
        song.title;


    document
        .getElementById("songArtist")
        .textContent =
        song.artist;


    /*
       VERY IMPORTANT:

       The cover comes from the current song.

       So:
       song8.jpg  → Very Very Much
       song9.jpg  → Oke Oke
       song10.jpg → Mooo 1
       etc.
    */

    document
        .getElementById("songCover")
        .src =
        song.cover;


    document
        .getElementById("playButton")
        .textContent =
        "▶";


    document
        .getElementById("progressBar")
        .value = 0;


    document
        .getElementById("currentTime")
        .textContent =
        "0:00";


    document
        .getElementById("duration")
        .textContent =
        "0:00";


    updateSongList();

}


/* ==================================================
   PLAY / PAUSE
================================================== */

function togglePlay() {

    if (audio.paused) {

        audio
            .play()
            .then(() => {

                document
                    .getElementById("playButton")
                    .textContent =
                    "Ⅱ";

            })
            .catch(() => {

                console.log(
                    "Audio could not be played."
                );

            });

    }

    else {

        audio.pause();

        document
            .getElementById("playButton")
            .textContent =
            "▶";

    }

}


/* ==================================================
   NEXT SONG
================================================== */

function nextSong() {

    currentSong++;


    if (
        currentSong >=
        songs.length
    ) {

        currentSong = 0;

    }


    loadSong(currentSong);


    audio
        .play()
        .then(() => {

            document
                .getElementById("playButton")
                .textContent =
                "Ⅱ";

        })
        .catch(() => {});

}


/* ==================================================
   PREVIOUS SONG
================================================== */

function previousSong() {

    currentSong--;


    if (currentSong < 0) {

        currentSong =
            songs.length - 1;

    }


    loadSong(currentSong);


    audio
        .play()
        .then(() => {

            document
                .getElementById("playButton")
                .textContent =
                "Ⅱ";

        })
        .catch(() => {});

}


/* ==================================================
   REPEAT
================================================== */

function toggleRepeat() {

    repeatSong =
        !repeatSong;


    document
        .getElementById("repeatButton")
        .classList.toggle(
            "active",
            repeatSong
        );

}


/* ==================================================
   SONG ENDED
================================================== */

audio.addEventListener(
    "ended",
    function() {

        if (repeatSong) {

            audio.currentTime = 0;

            audio.play();

        }

        else {

            nextSong();

        }

    }
);


/* ==================================================
   PLAY / PAUSE ICON
================================================== */

audio.addEventListener(
    "play",
    function() {

        document
            .getElementById("playButton")
            .textContent =
            "Ⅱ";

    }
);


audio.addEventListener(
    "pause",
    function() {

        document
            .getElementById("playButton")
            .textContent =
            "▶";

    }
);


/* ==================================================
   PROGRESS
================================================== */

audio.addEventListener(
    "timeupdate",
    function() {

        if (!audio.duration) {
            return;
        }


        const progress =
            (
                audio.currentTime /
                audio.duration
            ) * 100;


        document
            .getElementById("progressBar")
            .value =
            progress;


        document
            .getElementById("currentTime")
            .textContent =
            formatTime(
                audio.currentTime
            );


        document
            .getElementById("duration")
            .textContent =
            formatTime(
                audio.duration
            );

    }
);


/* ==================================================
   AUDIO DURATION
================================================== */

audio.addEventListener(
    "loadedmetadata",
    function() {

        document
            .getElementById("duration")
            .textContent =
            formatTime(
                audio.duration
            );

    }
);


/* ==================================================
   CHANGE PROGRESS
================================================== */

document
    .getElementById("progressBar")
    .addEventListener(
        "input",
        function() {

            if (!audio.duration) {
                return;
            }


            audio.currentTime =
                (
                    this.value / 100
                ) *
                audio.duration;

        }
    );


/* ==================================================
   FORMAT TIME
================================================== */

function formatTime(seconds) {

    if (isNaN(seconds)) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const secs =
        Math.floor(
            seconds % 60
        );


    return (
        minutes +
        ":" +
        String(secs)
            .padStart(2, "0")
    );

}


/* ==================================================
   SONG LIST
================================================== */

function updateSongList() {

    const list =
        document.getElementById(
            "songList"
        );


    list.innerHTML = "";


    songs.forEach(
        function(song, index) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "song-item";


            if (
                index ===
                currentSong
            ) {

                item.classList.add(
                    "active"
                );

            }


            item.innerHTML = `

                <div class="song-number">
                    ${index + 1}
                </div>

                <div class="song-name">
                    ${song.title}
                </div>

            `;


            item.onclick =
                function() {

                    loadSong(index);


                    audio
                        .play()
                        .then(() => {

                            document
                                .getElementById(
                                    "playButton"
                                )
                                .textContent =
                                "Ⅱ";

                        })
                        .catch(() => {});

                };


            list.appendChild(item);

        }
    );

}


/* ==================================================
   TIMER
================================================== */


/*
    MET:

    11.07.2025
    20:31
    UTC+5
*/

const metStart =
    new Date(
        "2025-07-11T20:31:00+05:00"
    );


/*
    STARTED DATING:

    05.02.2026

    Because you didn't give
    an exact time, this uses
    00:00 UTC+5.
*/

const datingStart =
    new Date(
        "2026-02-05T00:00:00+05:00"
    );


/* ==================================================
   COUNTER
================================================== */

function makeCounter(startDate) {

    const now =
        new Date();


    let difference =
        now.getTime() -
        startDate.getTime();


    if (difference < 0) {

        difference = 0;

    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (
                totalSeconds %
                86400
            ) / 3600
        );


    const minutes =
        Math.floor(
            (
                totalSeconds %
                3600
            ) / 60
        );


    const seconds =
        totalSeconds %
        60;


    return `
        ${days} days<br>

        ${String(hours).padStart(2, "0")}
        :
        ${String(minutes).padStart(2, "0")}
        :
        ${String(seconds).padStart(2, "0")}
    `;

}


/* ==================================================
   UPDATE TIMERS
================================================== */

function updateTimers() {

    document
        .getElementById("metCounter")
        .innerHTML =
        makeCounter(
            metStart
        );


    document
        .getElementById("datingCounter")
        .innerHTML =
        makeCounter(
            datingStart
        );

}


updateTimers();


setInterval(
    updateTimers,
    1000
);


/* ==================================================
   OPEN TIMER
================================================== */

function openTimer() {

    document
        .getElementById("menuScreen")
        .classList.add("hidden");


    document
        .getElementById("timerPage")
        .classList.remove("hidden");


    updateTimers();

}


/* ==================================================
   NOTE
================================================== */

function openNote() {

    document
        .getElementById("menuScreen")
        .classList.add("hidden");


    document
        .getElementById("notePage")
        .classList.remove("hidden");

}