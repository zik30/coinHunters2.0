import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const findId = async (phone) => {
  const { data } = await axios.get(
    "https://66a8b255e40d3aa6ff5902eb.mockapi.io/players/"
  );

  const user = data.find((u) => u.phone === phone);

  if (!user) {
    console.error("Пользователь не найден");
    return;
  }

  return user.id;
};

const useUserStore = create(
  persist(
    (set, get) => ({
      name: "",
      phone: "",
      coin: 0,
      setUser: (name, phone) => set((state) => ({ ...state, name, phone })),
      setCoin: async (coin) => {
        const id = await findId(get().phone);

        if (!id) {
          console.error("ID не найден. Обновление coin отменено.");
          return;
        }

        const currentCoin = get().coin;
        const newCoin = currentCoin + coin;

        try {
          await axios.put(
            `https://66a8b255e40d3aa6ff5902eb.mockapi.io/players/${id}`,
            {
              name: get().name,
              phone: get().phone,
              coin: newCoin,
            }
          );
          set({ coin: newCoin });
        } catch (error) {
          console.error("Ошибка при обновлении монет:", error);
        }
      },
      logout: () => set({ name: "", phone: "", coin: 0 }),
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
