import styles from "./Hero.module.scss";

export const Hero = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  const handleAnimation = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 data-value="COINHUNTERS" onMouseOver={(e) => handleAnimation(e)}>
          CoinHunters
        </h1>
      </div>
    </section>
  );
};
