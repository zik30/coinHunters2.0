import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const user = { username: "username" };
export const tokens = { access: "accessToken", refresh: "refreshToken" };

const useUserStore = create(
  persist(
    (set, get) => ({
      isAuth: !!localStorage.getItem(tokens.access)?.trim(),
      isLoggingOut: false,
      isLoadingUser: false,
      username: null,
      coins: null,

      setUsername: (username) => set({ username }),
      setCoin: async (updatedCoins) => {
        const addedCoins = updatedCoins + get().coins;
        await axios.post(
          "https://geeks-game.onrender.com/api/user/coins",
          {
            coins: addedCoins,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(tokens.access)}`,
            },
          }
        );
        set({ coins: addedCoins });
      },

      setAuth: (isAuth) => {
        set({ isAuth });
        if (!isAuth) {
          localStorage.removeItem(tokens.access);
          localStorage.removeItem(tokens.refresh);
          set({ user: null, username: null });
        }
      },

      login: async (response) => {
        const { accessToken, refreshToken } = response.data;
        localStorage.setItem(tokens.access, accessToken);
        localStorage.setItem(tokens.refresh, refreshToken);
        set({ isAuth: true });

        try {
          await get().fetchUserData();
        } catch (error) {
          console.error("Ошибка при получении данных пользователя:", error);
        }
      },

      logout: () => {
        const state = get();
        if (state.isLoggingOut) return;

        set({ isLoggingOut: true });
        localStorage.removeItem(tokens.access);
        localStorage.removeItem(tokens.refresh);
        sessionStorage.removeItem(user.username);
        set({ isAuth: false, username: null, coins: null });

        setTimeout(() => set({ isLoggingOut: false }), 1000);
      },

      checkAuth: async (refreshToken) => {
        try {
          const { data } = await axios.post(
            `https://geeks-game.onrender.com/auth/refresh`,
            {
              refreshToken,
            }
          );

          localStorage.setItem(tokens.access, data.accessToken);
          set({ isAuth: true });

          try {
            await get().fetchUserData();
          } catch (error) {
            console.error("Ошибка при получении данных пользователя:", error);
          }

          return data;
        } catch (error) {
          get().isAuth(false);
          return Promise.reject(error);
        }
      },

      fetchUserData: async () => {
        try {
          set({ isLoadingUser: true });
          console.log(" auth is in process");

          const response = await axios.get(
            `https://geeks-game.onrender.com/api/user/profile`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem(tokens.access)}`,
              },
            }
          );
          const userData = response.data;
          console.log(userData);

          set({ username: userData.user.username, coins: userData.user.coins });
        } catch (error) {
          console.error("Ошибка при получении данных пользователя:", error);
        } finally {
          set({ isLoadingUser: false });
        }
      },
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
