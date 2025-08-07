import { useEffect, useRef, useState } from "react";
import styles from "./LeaderList.module.scss";
import { Pedestal } from "@widget/pedestal/Pedestal";
import axios from "axios";
import useUserStore from "../../store/userStore";
import classNames from "classnames";

// const users = [
//   {
//     name: "zik",
//     coin: 1000,
//   },
//   {
//     name: "zik",
//     coin: 1000,
//   },
//   {
//     name: "zik",
//     coin: 1000,
//   },
//   {
//     name: "zik",
//     coin: 1000,
//   },
//   {
//     name: "zik",
//     coin: 1000,
//   },
//   {
//     name: "zik",
//     coin: 1000,
//   },
//   {
//     name: "zik",
//     coin: 1000,
//   },
//   {
//     name: "zik",
//     coin: 1000,
//   },
//   {
//     name: "zik",
//     coin: 1000,
//   },
//   {
//     name: "zik",
//     coin: 1000,
//   },
// ];

export const LeaderList = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [users, setUsers] = useState([]);
  const { phone } = useUserStore();

  useEffect(() => {
    const fetchGamers = async () => {
      try {
        const response = await axios.get(
          "https://66a8b255e40d3aa6ff5902eb.mockapi.io/players"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Ошибка при получении игроков:", error);
      }
    };

    fetchGamers();
  }, []);

  const handleMouseMove = (e) => {
    cardRefs.current.forEach((card) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    });
  };

  const sortedUsers = [...users].sort((a, b) => b.coin - a.coin);

  const topUsers = sortedUsers.slice(0, 3);
  const otherUsers = sortedUsers.slice(3);

  return (
    <section className={styles.leaderList}>
      <div className={styles.container}>
        {topUsers && <Pedestal data={topUsers} />}

        <div
          className={styles.list}
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          {otherUsers?.map((user, id) => (
            <div
              key={id}
              className={classNames(
                styles.user,
                user.phone === phone && styles.id
              )}
              ref={(el) => (cardRefs.current[id] = el)}
            >
              <div className={styles.cardContent}>
                <h3>{id + 4}</h3>
                <h3>{user.name}</h3>
                <h3>{user.coin}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
