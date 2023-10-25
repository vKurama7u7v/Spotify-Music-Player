import React, { useEffect, useState } from "react";

function MusicPlayerWidget(props) {
  const {
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
    audioRef,
    songInfo,
    setSongInfo,
    songs,
    setSongs,
    onLoadedMetadata,
    onTimeUpdate,
    onEnded,
    ref,
    src,
  } = props;

  // Event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const togglePlayPauseIcon = () => {
    if (isPlaying) {
      return faPause;
    } else {
      return faPlay;
    }
  };

  const getTime = (time) => {
    let minute = Math.floor(time / 60);
    let second = ("0" + Math.floor(time % 60)).slice(-2);
    return `${minute}:${second}`;
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    } else if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
      } else {
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
      }
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const activeLibraryHandler = (newSong) => {
    const newSongs = songs.map((song) => {
      if (song.id === newSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  /*
  // use Audio constructor to create HTMLAudioElement
  const song_url =
    "https://p.scdn.co/mp3-preview/b4eb1d7db30834c8d536ad7b608b23fbc14b5b4b?cid=34a9e4e696a64f1fa9e86ae2c33b4604";

  // variable to play audio in loop
  const [audio, setAudio] = useState(null);
  const [playInLoop, setPlayInLoop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const onSetPlaying = () => {
    setIsPlaying(!isPlaying);
  };

  // Load Audio File
  useEffect(() => {
    setAudio(new Audio(song_url));
  }, []);

  // Play audio sound
  const playSound = () => {
    audio.play();
  };

  // Pause audio sound
  const pauseSound = () => {
    audio.pause();
  };

  // Stop audio sound
  const stopSound = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const onSetSound = () => {
    if (isPlaying) {
      pauseSound();
    } else {
      playSound();
    }
  };

  const onEnded = () => {
    console.log("finished playing");
  };
  */

  return (
    <>
      <div className="music-player-component--widget">
        <div className="music-player-component--wrapper">
          <div className="music-player-component--left">
            <IconMediaPlayer />

            <div className="info">
              <h3>Liily ❤️</h3>
              <p>6 songs</p>
            </div>

            <button
              className="music-player-component--button"
              onClick={() => {
                playSongHandler();
              }}
            >
              <div className="left">
                {/* <i class={isPlaying ? "bx bx-pause" : "bx bx-play"}></i> */}
                <i class={"bx bx-play"}></i>
              </div>

              {/* <div className="right">{isPlaying ? "Pause" : "Play"}</div> */}
              <div className="right">{"Play"}</div>
            </button>
          </div>
          <div className="music-player-component--right">
            <Portrait
              img="https://creatorspace.imgix.net/richdata/spotify/playlists/aHR0cHM6Ly9pbWFnZS1jZG4tYWsuc3BvdGlmeWNkbi5jb20vaW1hZ2UvYWI2NzcwNmMwMDAwYmViYjI2Y2E2MmZhNDdmZTBlYzI0NTJhYmZjOA==.jpeg?h=127"
              title="Titulo"
              alt="portrait"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Portrait({ img, title, alt }) {
  return (
    <>
      <div className="music-player-component--portrait">
        <img src={img} alt={alt} title={title} />
      </div>
    </>
  );
}

function IconMediaPlayer() {
  return (
    <>
      <div className="music-player-component--icon-spotify">
        <svg
          width="16"
          height="16"
          class="h-full w-full"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="10" fill="#1ED760"></rect>
          <path
            d="M19.9999 8C13.3727 8 8 13.3727 8 20.0001C8 26.6278 13.3727 32 19.9999 32C26.6279 32 32 26.6278 32 20.0001C32 13.3731 26.6279 8.00057 19.9998 8.00057L19.9999 8ZM25.503 25.3075C25.2881 25.6601 24.8267 25.7718 24.4742 25.5555C21.6567 23.8344 18.1099 23.4447 13.9328 24.399C13.5303 24.4907 13.1291 24.2385 13.0374 23.8359C12.9452 23.4332 13.1964 23.032 13.6 22.9403C18.1711 21.8959 22.092 22.3456 25.2551 24.2787C25.6076 24.495 25.7194 24.955 25.503 25.3075ZM26.9718 22.0401C26.701 22.4803 26.1249 22.6193 25.685 22.3484C22.4594 20.3658 17.5426 19.7916 13.7273 20.9497C13.2325 21.0992 12.71 20.8203 12.5598 20.3264C12.4108 19.8316 12.6897 19.3099 13.1837 19.1595C17.5417 17.8371 22.9595 18.4777 26.6637 20.754C27.1036 21.0248 27.2426 21.6007 26.9718 22.0401ZM27.0979 18.6376C23.2304 16.3404 16.8495 16.1292 13.1569 17.2499C12.5639 17.4297 11.9369 17.095 11.7572 16.502C11.5775 15.9088 11.9119 15.2821 12.5053 15.1019C16.7441 13.815 23.7906 14.0637 28.2434 16.7071C28.7779 17.0236 28.9527 17.7125 28.636 18.2451C28.3208 18.7785 27.6301 18.9543 27.0985 18.6376H27.0979Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default MusicPlayerWidget;
