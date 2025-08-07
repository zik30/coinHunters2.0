import styles from "./About.module.scss";
import img1 from "@assets/slider/charactersChoose.png";
import img2 from "@assets/slider/coins.png";
import img3 from "@assets/slider/boss.png";
import img4 from "@assets/slider/choose.png";

const sliderAbout = [
  {
    img: img1,
    title: "Выбери своего персонажа среди учителей Гикса!",
    subtitle: "But in a much more real sense, I have no idea what I'm doing.",
  },
  {
    img: img2,
    title: "Собирай как можно больше коинов и не теряй жизни!",
    subtitle: "Collect all coins and avoid losing hearts!",
  },
  {
    img: img3,
    title: "Сражайся против дронов и  победи главного босса!",
    subtitle: "Fight the drones and defeat the boss!",
  },
  {
    img: img4,
    title: "Выбери кого добавить из учителей каждую неделю!",
    subtitle: "Pick a new teacher every week!",
  },
];

const animateSubtitle = (text) =>
  text.split(" ").map((word, index) => (
    <span
      key={index}
      className={styles.cardSubtitleWord}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      {word}&nbsp;
    </span>
  ));

export const About = () => {
  return (
    <section>
      <h2 className={styles.h2}>Об Игре</h2>
      <div className={styles.section}>
        {sliderAbout.map((slider, id) => (
          <div key={id} className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{slider.title}</h3>
              <h4 className={styles.cardSubtitle}>
                {animateSubtitle(slider.subtitle)}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
