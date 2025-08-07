import React from "react";
import styles from "./CharactersSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FelixImg from "@assets/images/front/Felix.jpg";
import AkjolImg from "@assets/images/front/Akjol.jpg";
import RadomirImg from "@assets/images/back/Radomir.jpg";
import AlekseyImg from "@assets/images/mob/Aleksei.webp";
import AidanaImg from "@assets/images/uxui/Aidana.webp";

const characters = [
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
  {
    name: "Радомир",
    surname: "",
    role: "",
    exp: "Преподаватель по Backe",
    img: RadomirImg,
  },
  {
    name: "Алексей",
    surname: "",
    role: "",
    exp: "Преподаватель по Mobilke",
    img: AlekseyImg,
  },
  {
    name: "Айдана",
    surname: "",
    role: "",
    exp: "Преподаватель по UxUi",
    img: AidanaImg,
  },
];

const CharactersSlider = () => {
  return (
    <div className={styles.main}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {characters.map((char, idx) => (
          <SwiperSlide key={idx} className={styles.swiperSlide}>
            <div className={styles.card}>
              <img src={char.img} alt={char.name} className={styles.avatar} />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardName}>{char.name}</div>
              <div className={styles.cardSurname}>{char.surname}</div>
              <div className={styles.cardRole}>{char.role}</div>
              <div className={styles.cardExp}>{char.exp}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CharactersSlider;
