import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import useUserStore from "@store/userStore";
import { useState } from "react";

const navLink = [
  {
    label: "LeaderBoard",
    path: "/leaderboard",
  },
  {
    label: "Characters",
    path: "/characters",
  },
  {
    label: "Announcements",
    path: "/announcements",
  },
  {
    label: "Game",
    path: "/game",
  },
];

const Header = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { name, coin, logout } = useUserStore();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <h1>CH</h1>
        </Link>
        <div className={styles.navLinks}>
          {navLink.map((link, index) => (
            <Link key={index} to={link.path} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </div>
        <div
          className={styles.icons}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <div className={styles.icon}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MEE3OUI2QkExNDYxMUVDOEU1NEVERTcwQzFGOTJGRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MEE3OUI2Q0ExNDYxMUVDOEU1NEVERTcwQzFGOTJGRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUwQTc5QjY5QTE0NjExRUM4RTU0RURFNzBDMUY5MkZGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUwQTc5QjZBQTE0NjExRUM4RTU0RURFNzBDMUY5MkZGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+W5qehQAAAmRJREFUeNrsms9LFVEUx9/YDx8ovFUFIoZZhITVQsXnzhcGgtiyoKD+giCCWrWsVasWLYqohRAtBLU2Uo8WVmYJUgShERUUuBC07Hfq9Bm4i2G8t9fI3OFd5xz4LN7lnJnznTtz7j0zz/N9P5cFq8llxESoCBWhIlSEilARKkJFaOaEbk7xgu6HVtgK3+AFvElNadC9WKQWzsFHX28v4Th4lvPIeRbbtGYYgbb/8L0HJ+CzrWRsCW2ASWiMEfMEDsFPV4qRB4MxRQbWDRddmtF+uKsZn4Br8EEVptOwK+KzDLuVT9UXo2FN0bkONRG/ehjX+F5wpRgtQiH0e07N3A+NbwvMRh6hh1Cq9me0EBEZ2JhBZGBv4VVkbKcLxcjTjP2qEPM7jd1a0gf9opm9nn+cZ5sqTGH75ILQVXgaGdsDZw3nvqK2hNHq7MQW8JRhu3cDOmAHlOC+xmcV2lypulvUhr11HbF34JhLW8AD8BjqYsS8g06Yd6kfDWa0L0bSr9U+d95SPlYb73FVUW/BH4PPElyCdjWj1sxL6WvadjgM+yCv2rFpKMPXkF+9asqTT8pChTsPZWiKGdcFszAEdUnnleTB8jAYWiq+w2VoqRDXDrdhJRQ7vY4LlYrQAjwyrJ+BgCOGuE5YMMTNQbHahJ40JLsEAxVi98KMIf5mUkJtVt33UITRCn4z0AUPXH2ve0bTgplsQa27TgqNu0Qsy5t6ESpC15jNby9Bu3UwK0I33K3rZ+UZfQYrFvJ7Xo1tWi8chU0JHW8KriZ1t3jy704RKkJFqAgVoSJUhIpQEbpB7a8AAwB9zWfbRxVjNwAAAABJRU5ErkJggg=="
              alt="login icon"
            />
            {showTooltip && (
              <div className={styles.tooltip}>
                {name ? (
                  <>
                    <h4>{name}</h4>
                    <p>Coins: {coin}</p>
                    <button onClick={logout}>Logout</button>
                  </>
                ) : (
                  <Link to={"/registration"}>
                    <button>Register / Login</button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
