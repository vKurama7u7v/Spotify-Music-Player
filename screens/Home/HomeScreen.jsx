import React from "react";

import BaseLayout from "@/layouts/BaseLayout";
import AboutMe from "@/sections/AboutMe";
import MusicPlayerWidget from "@/widgets/music-player/MusicPlayerWidget";
import ExampleSection from "@/sections/Examples/ExampleSection";

function HomeScreen() {
  return (
    <>
      <BaseLayout>
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
