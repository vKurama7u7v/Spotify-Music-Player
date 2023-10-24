import React from "react";

import BaseLayout from "@/layouts/BaseLayout";
import AboutMe from "@/sections/AboutMe";
import MusicPlayerWidget from "@/widgets/music-player/MusicPlayerWidget";

function HomeScreen() {
  return (
    <>
      <BaseLayout>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <MusicPlayerWidget />
          </div>
        </section>
        <AboutMe />
      </BaseLayout>
    </>
  );
}

export default HomeScreen;
