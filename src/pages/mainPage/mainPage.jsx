import Instruction from "@widget/instruction/Instruction.jsx";
import { Hero } from "@widget/hero/hero.jsx";
import { About } from "@widget/about/About.jsx";
import { SliderSection } from "@widget/sliderSection/SliderSection.jsx";
import { Challenge } from "@widget/challenge/Challenge";
import { Video } from "@widget/video/Video";
import { Geek } from "@widget/geek/Geek";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Geek />
      <Video />
      <About />
      <SliderSection />
      <Instruction />
      <Challenge />
    </>
  );
};

export default MainPage;
