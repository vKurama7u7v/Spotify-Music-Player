import React from "react";

import BaseLayout from "@/layouts/BaseLayout";
import AboutMe from "@/sections/AboutMe";
import MusicPlayerWidget from "@/widgets/music-player/MusicPlayerWidget";
import ExampleSection from "@/sections/Examples/ExampleSection";
import HeroSection from "@/sections/Hero/HeroSection";

function HomeScreen() {
  return (
    <>
      <BaseLayout>
        <HeroSection />

        {/* Examples */}
        <ExampleSection>
          <MusicPlayerWidget />
        </ExampleSection>

        <AboutMe />
      </BaseLayout>
    </>
  );
}

export default HomeScreen;
