import { Layout } from "@app/layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import { AuthGuard } from "../guard/AuthGuard";
import { GuestGuard } from "../guard/GuestGuard";
import MainPage from "@pages/mainPage/mainPage";
import Leader from "@pages/leaderPage/LeaderPage";
import { RegistrationPage2 } from "@pages/registrationPage/RegistrationPage2";
import Game from "@pages/gamePage/GamePage";
import { CharactersPage } from "@pages/charactersPage/CharactersPage";
import { AnouncementsPage } from "@pages/anouncementsPage/AnouncementsPage";
import LoginPage from "@pages/loginPage/LoginPage";

export const router = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/leaderboard",
          element: <Leader />,
        },
        {
          path: "/game",
          element: (
            <AuthGuard>
              <Game />
            </AuthGuard>
          ),
        },
        {
          path: "/registration",
          element: (
            <GuestGuard>
              <RegistrationPage2 />
            </GuestGuard>
          ),
        },
        {
          path: "/login",
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          path: "/characters",
          element: <CharactersPage />,
        },
        {
          path: "/announcements",
          element: <AnouncementsPage />,
        },
      ],
    },
  ]);
