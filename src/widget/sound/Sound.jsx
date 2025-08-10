import React from "react";
import styles from "./Sound.module.scss";

export const Sound = () => {
  return (
    <section className={styles.section}>
      <h2>Звуки Персонажей!</h2>
      <p>
        На данный момент в игре вы слышите голос учителя Феликса - ОТЦА
        ФРОНТЕНДА🧙🏽‍♂️ и Акжола - Тревис Скотт🤘🏾
        <br />
        <br />
        Но мы планируем также вставить голос каждого учителя и даже уже записали
        голоса нескольких учителей с их коронными фразами😜
      </p>
    </section>
  );
};
