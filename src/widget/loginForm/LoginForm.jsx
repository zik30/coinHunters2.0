import styles from "./LoginForm.module.scss";
import { AnimatedPath } from "@widget/animatedPath/AnimatedPath";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useUserStore from "@store/userStore";

export const LoginForm = () => {
  const { login } = useUserStore();
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const showToast = (type) => {
    setToast(type);
    setTimeout(() => setToast(null), 3000);
  };

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data) => {
      const response = await axios.post(
        "https://geeks-game.onrender.com/auth/login",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);

      return response;
    },
    onSuccess: (response) => {
      login(response);
      showToast("success");
      navigate("/game");
    },
    onError: (error) => {
      let message = "Что-то пошло не так(";
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        message = error.response.data.message;
      }
      showToast(message);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
    console.log("Форма отправлена:", data);
  };

  return (
    <section className={styles.registrationForm}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <AnimatedPath
            text="CoinHunters - is a game to become a true Geek! Geeeeeeeeeks"
            duration={21}
            reversed={true}
            textProperties={{
              fontSize: /iPhone/.test(navigator.userAgent) ? "19px" : "17px",
              letterSpacing: "-0.47px",
            }}
          />
        </div>
        <div className={styles.rightBlock}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder=" "
                autoComplete="off"
                id="username"
                className={styles.formInput}
                {...register("username", {
                  required: "Введите имя пользователя",
                  pattern: {
                    value: /^[a-zA-Zа-яА-ЯёЁ0-9]{3,}$/,
                    message: "Имя должно содержать минимум 3 буквы",
                  },
                })}
              />
              <label htmlFor="username">Username</label>
              {errors.username && (
                <span className={styles.error}>{errors.username.message}</span>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder=" "
                autoComplete="off"
                id="password"
                className={styles.formInput}
                {...register("password", {
                  required: "Введите пароль",
                  pattern: {
                    value: /^.{5,}$/,
                    message: "Пароль должен содержать минимум 5 символов",
                  },
                })}
                maxLength={16}
              />
              <label htmlFor="password">Password</label>
              {errors.password && (
                <span className={styles.error}>{errors.password.message}</span>
              )}
            </div>
            <button type="submit" className={styles.btn}>
              Войти!
            </button>
          </form>
          <p className={styles.text}>
            У вас до сих пор не было аккауна?!😮{" "}
            <button onClick={() => navigate("/registration")}>
              быстрее зарегистрируйтесь!
            </button>
          </p>
        </div>
      </div>
      {toast && (
        <div
          className={`${styles.toast} ${
            toast === "success" ? styles.toastSuccess : styles.toastError
          }`}
        >
          {toast === "success"
            ? "Ты успешно зарегистрирован)"
            : "Такого пользователя не существует("}
        </div>
      )}
    </section>
  );
};
