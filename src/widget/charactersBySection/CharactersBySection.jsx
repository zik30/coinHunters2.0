import styles from "./CharactersBySection.module.scss";
import FelixImg from "@assets/images/front/Felix.jpg";
import AkjolImg from "@assets/images/front/Akjol.jpg";
import RadomirImg from "@assets/images/back/Radomir.jpg";
import AlekseyImg from "@assets/images/mob/Aleksei.webp";
import AidanaImg from "@assets/images/uxui/Aidana.webp";
import classNames from "classnames";

const front = [
  {
    name: "Феликс",
    surname: "",
    role: "",
    exp: "Преподаватель по Frontu (1 месяц)",
    img: FelixImg,
  },
  {
    name: "Акжол",
    surname: "",
    role: "",
    exp: "Преподаватель по Frontu (3 месяц)",
    img: AkjolImg,
  },
];
const back = [
  {
    name: "Радомир",
    surname: "",
    role: "",
    exp: "Преподаватель по Backe",
    img: RadomirImg,
  },
];
const mob = [
  {
    name: "Алексей",
    surname: "",
    role: "",
    exp: "Преподаватель по Mobilke",
    img: AlekseyImg,
  },
];
const uxui = [
  {
    name: "Айдана",
    surname: "",
    role: "",
    exp: "Преподаватель по UxUi",
    img: AidanaImg,
  },
];

export const CharactersBySection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Все Персонажи В Игре</h2>
        <p>являются учителями разных направлений ГИКСА)) Узнаете своего?</p>
      </div>

      <div className={styles.transition}>
        <h2>FRONTEND</h2>
      </div>

      <div className={styles.cards}>
        <div className={styles.container}>
          {front.map((teacher) => (
            <div className={classNames(styles.card, styles.frontCard)}>
              <div className={styles.img}>
                <img src={teacher.img} alt="teacher img" />
              </div>
              <h3>{teacher.name}</h3>
              <p>{teacher.exp}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.transition}>
        <h2>BACKEND</h2>
      </div>

      <div className={styles.cards}>
        <div className={styles.container}>
          {back.map((teacher) => (
            <div className={classNames(styles.card, styles.backCard)}>
              <div className={styles.img}>
                <img src={teacher.img} alt="teacher img" />
              </div>
              <h3>{teacher.name}</h3>
              <p>{teacher.exp}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.transition}>
        <h2>
          MOBILE
          <br />
          DEVELOPMENT
        </h2>
      </div>

      <div className={styles.cards}>
        <div className={styles.container}>
          {mob.map((teacher) => (
            <div className={classNames(styles.card, styles.mobCard)}>
              <div className={styles.img}>
                <img src={teacher.img} alt="teacher img" />
              </div>
              <h3>{teacher.name}</h3>
              <p>{teacher.exp}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.transition}>
        <h2>UX/UI</h2>
      </div>

      <div className={styles.cards}>
        <div className={styles.container}>
          {uxui.map((teacher) => (
            <div className={classNames(styles.card, styles.uxuiCard)}>
              <div className={styles.img}>
                <img src={teacher.img} alt="teacher img" />
              </div>
              <h3>{teacher.name}</h3>
              <p>{teacher.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
