import React from "react";
import styles from "./NoTeacher.module.scss";

export const NoTeacher = () => {
  return (
    <section className={styles.body}>
      <div className={styles.lines}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.container}>
        <h2>Не нашли своего учителя?</h2>
        <p>
          Не волнуйся!
          <br /> <br /> Каждую неделю человек, кто набрал наивысший балл по
          рейтингу, сможет выбрать кого из учителей добавить следующим!
          <br />
          <br /> Или может даже себя)))
        </p>
      </div>
    </section>
  );
};
