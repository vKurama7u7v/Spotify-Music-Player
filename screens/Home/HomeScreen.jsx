import React from "react";

import BaseLayout from "@/layouts/BaseLayout";
import AboutMe from "@/sections/AboutMe";
import MusicPlayerWidget from "@/widgets/music-player/MusicPlayerWidget";
import ExampleSection from "@/sections/Examples/ExampleSection";
import HeroSection from "@/sections/Hero/HeroSection";

function HomeScreen(props) {
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

  return (
    <>
      <BaseLayout>
        <HeroSection />

        {/* Examples */}
        <ExampleSection>
          <MusicPlayerWidget
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
            songs={songs}
            setSongs={setSongs}
            //
            onLoadedMetadata={onLoadedMetadata}
            onTimeUpdate={onTimeUpdate}
            onEnded={onEnded}
            ref={ref}
            src={src}
          />
        </ExampleSection>

        <AboutMe />
      </BaseLayout>
    </>
  );
}

export default HomeScreen;
