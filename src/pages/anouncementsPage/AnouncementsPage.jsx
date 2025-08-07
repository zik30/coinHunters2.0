import React from "react";
import { Geek } from "@widget/geek/Geek";
import { NoTeacher } from "@widget/noTeacher/NoTeacher";
import { Sound } from "../../widget/sound/Sound";

export const AnouncementsPage = () => {
  return (
    <>
      <Geek />
      <NoTeacher />
      <Sound />
      <div
        style={{ backgroundColor: "#ff4d4f", padding: 50, textAlign: "center" }}
      >
        Впереди нас ждут больше объявлений!
        <br /> Оставайтесь вместе с нами и играйте в игру!
      </div>
    </>
  );
};
