import React from "react";
import styles from "./Challenge.module.scss";
import { Link } from "react-router-dom";

export const Challenge = () => {
  return (
    <section className={styles.challengeSection}>
      <h2>Готов к испытанию?</h2>
      <p>
        Зарегистрируйся, соревнуйся в таблице лидеров и докажи, что достоин
        Коинов!
      </p>
      <button>
        <Link to="/registration" className={styles.btn}>
          Играть
        </Link>
      </button>
    </section>
  );
};
