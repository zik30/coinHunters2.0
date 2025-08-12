import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const findId = async (phone) => {
  const { data } = await axios.get("https://geeks-game.onrender.com/users/");

  const user = data.find((u) => u.phone === phone);

  if (!user) {
    console.error("Пользователь не найден");
    return;
  }

  return user._id;
};

const useUserStore = create(
  persist(
    (set, get) => ({
      name: "",
      phone: "",
      coins: 0,
      setUser: (name, phone) => set((state) => ({ ...state, name, phone })),
      setCoin: async (newCoin) => {
        const id = await findId(get().phone);

        if (!id) {
          console.error("ID не найден. Обновление coin отменено.");
          return;
        }

        const updatedCoin = newCoin + get().coins;

        try {
          await axios.put(`https://geeks-game.onrender.com/users/${id}`, {
            name: get().name,
            phone: get().phone,
            coins: updatedCoin,
          });
          set({ coins: updatedCoin });
        } catch (error) {
          console.error("Ошибка при обновлении монет:", error);
        }
      },
      logout: () => set({ name: "", phone: "", coins: 0 }),
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
