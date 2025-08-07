import React from "react";
import styles from "./SliderSection.module.scss";
import CharactersSlider from "@widget/charactersSlider/CharactersSlider.jsx";

export const SliderSection = () => {
  return (
    <section className={styles.sliderSection}>
      <h2 className={styles.sliderTitle}>Geeks персонажи</h2>
      <p className={styles.sliderSubtitle}>
        персонажами являются реальные преподаватели/менторы GeeksAcademy
      </p>
      <CharactersSlider />
    </section>
  );
};
