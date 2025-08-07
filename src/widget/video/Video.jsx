import styles from "./Video.module.scss";
import video from "@assets/video_2.mp4";
import { Link } from "react-router-dom";

export const Video = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBg}>
        <video autoPlay loop muted className={styles.heroVideo}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>COINHUNTERS</h1>

        <Link to="/registration" className={styles.heroBtn}>
          Играть
        </Link>
      </div>
    </section>
  );
};
