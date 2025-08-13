import { useRef } from "react";
import styles from "./LeaderList.module.scss";
import { Pedestal } from "@widget/pedestal/Pedestal";
import useUserStore from "../../store/userStore";
import classNames from "classnames";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const LeaderList = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const { username } = useUserStore();

  // Запрос через TanStack Query
  const { data, isLoading, isError } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      const res = await axios.get(
        "https://geeks-game.onrender.com/api/user/leaderboard?limit=100"
      );
      return res.data;
    },
  });

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

  if (isLoading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (isError || !data?.success) {
    return <div className={styles.error}>Ошибка при получении данных</div>;
  }

  const leaderboard = data.leaderboard || [];

  const topUsers = leaderboard.slice(0, 3);
  const otherUsers = leaderboard.slice(3);

  return (
    <section className={styles.leaderList}>
      <div className={styles.container}>
        {topUsers.length > 0 && <Pedestal data={topUsers} />}

        <div
          className={styles.list}
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          {otherUsers.map((user, idx) => (
            <div
              key={user.rank}
              className={classNames(
                styles.user,
                user.username === username && styles.id
              )}
              ref={(el) => (cardRefs.current[idx] = el)}
            >
              <div className={styles.cardContent}>
                <h3>{user.rank}</h3>
                <h3>{user.username}</h3>
                <h3>{user.coins}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
