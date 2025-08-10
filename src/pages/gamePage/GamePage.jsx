import React, { useEffect, useRef, useState } from "react";
import { initKaboom, loadAssets } from "./kaboomLoader";
import { room1 } from "./scenes/room1";
import { setBackgroundColor } from "./scenes/roomUtils";
import { room2 } from "./scenes/room2";
import { makeNotificationBox } from "./ui/notificationBox";
import { characterSelection } from "./scenes/characterSelection";
import { directionSelector } from "./scenes/directionSelector";
import style from "./GamePage.module.scss";
import useUserStore from "@store/userStore.js";
import { state } from "./state/globalStateManager.js";

const Game = () => {
  const canvasRef = useRef(null);
  const { setCoin, coin } = useUserStore();
  const [coinCount, setCoinCount] = useState(coin);

  useEffect(() => {
    if (!canvasRef.current) return;

    const k = initKaboom(canvasRef.current);
    loadAssets(k);

    async function main() {
      const room1Data = await (await fetch("/maps/map-level-1.9.tmj")).json();
      const room2Data = await (await fetch("/maps/map-level-2.11.tmj")).json();

      k.scene("room1", (previousSceneData) =>
        room1(k, room1Data, setCoinCount, previousSceneData, setCoin, coinCount)
      );

      k.scene("room2", (previousSceneData) =>
        room2(k, room2Data, setCoinCount, previousSceneData, setCoin, coinCount)
      );

      k.scene("final-exit", async () => {
        setBackgroundColor(k, "#20214a");
        await setCoin(1200);
        k.add(
          makeNotificationBox(
            k,
            "You escaped the factory!\n The End. Thanks for playing!\n\nPress ENTER to go\n to the leaderboard."
          )
        );
        setCoin(state.current().coin);
        k.onKeyPress((key) => {
          if (key === "enter") {
            window.location.href = "/leaderboard";
          }
        });
      });

      k.scene("characterSelection", characterSelection);
      k.scene("directionSelector", () => directionSelector(k));

      k.scene("intro", () => {
        setBackgroundColor(k, "#20214a");
        k.add(
          makeNotificationBox(
            k,
            "Escape the factory!\nUse arrow keys to move, x to jump, z to attack.\nPress Enter to start!"
          )
        );
        k.onKeyPress("enter", () => {
          const context = new AudioContext();
          context.resume();
          k.go("room1", { exitName: null });
        });
      });

      k.go("directionSelector");
    }

    main();

    return () => {
      if (k) k.destroyAll();
    };
  }, []);

  return <canvas className={style.game} ref={canvasRef} />;
};

export default Game;
