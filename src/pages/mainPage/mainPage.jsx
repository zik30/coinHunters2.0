import Instruction from "@widget/instruction/Instruction.jsx";
import { Hero } from "@widget/hero/Hero.jsx";
import { About } from "@widget/about/About.jsx";
import { SliderSection } from "@widget/sliderSection/SliderSection.jsx";
import { Challenge } from "@widget/challenge/Challenge";
import { Video } from "@widget/video/Video";
import { Geek } from "@widget/geek/Geek";
import axios from "axios";

const MainPage = () => {
  const deleteCharacter = async () => {
    await axios.delete(
      "https://66a8b255e40d3aa6ff5902eb.mockapi.io/players/28"
    );
  };
  return (
    <>
      <Hero />
      <Geek />
      <Video />
      <button
        style={{ backgroundClip: "white", zIndex: 1000 }}
        onClick={deleteCharacter}
      >
        удалить
      </button>
      <About />
      <SliderSection />
      <Instruction />
      <Challenge />
    </>
  );
};

export default MainPage;
