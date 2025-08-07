import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>
        MADE BY <span>FRONTEND</span> MENTORS
      </h2>
      <div className={styles.mentors}>
        <h3>Raiana</h3>
        <h3>Ainazik</h3>
        <h3>Farukh</h3>
      </div>
    </footer>
  );
};
