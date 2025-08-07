import styles from "./RegistrationForm.module.scss";
import { AnimatedPath } from "@widget/animatedPath/AnimatedPath";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useUserStore from "../../store/userStore";

export const RegistrationForm = () => {
  const [toast, setToast] = useState(null);
  const [phoneValue, setPhoneValue] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      telephone: "+996 ",
    },
  });
  const { setUser, setCoin } = useUserStore();

  const formatPhone = (value) => {
    let digits = value.replace(/\D/g, "");

    if (digits.startsWith("996")) {
      digits = digits.slice(3);
    }

    digits = digits.slice(0, 9);

    let formatted = "+996 ";

    if (digits.length > 0) {
      formatted += digits.slice(0, 3);
    }
    if (digits.length > 3) {
      formatted += " " + digits.slice(3, 6);
    }
    if (digits.length > 6) {
      formatted += " " + digits.slice(6, 9);
    }

    return formatted;
  };

  const handleFocus = () => {
    if (!phoneValue || phoneValue.trim() === "") {
      setPhoneValue("+996 ");
      setValue("telephone", "+996 ");
    }
  };

  const handleBlur = () => {
    const digitsOnly = phoneValue.replace(/\D/g, "");
    if (digitsOnly === "996" || digitsOnly === "") {
      setPhoneValue("");
      setValue("telephone", "");
    }
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;

    if (!input.startsWith("+996 ")) {
      setPhoneValue("+996 ");
      setValue("telephone", "+996 ");
      return;
    }

    const formatted = formatPhone(input);
    setPhoneValue(formatted);
    setValue("telephone", formatted);
  };

  const showToast = (type) => {
    setToast(type);
    setTimeout(() => setToast(null), 3000);
  };

  const checkUserExists = async (phone) => {
    try {
      const response = await axios.get(
        "https://66a8b255e40d3aa6ff5902eb.mockapi.io/players"
      );
      const userExists = response.data.find((user) => user.phone === phone);
      if (userExists) {
        console.log("Пользователь найден:", userExists);
        return userExists;
      } else {
        console.log("Пользователь не найден");
        return null;
      }
    } catch (error) {
      console.error("Ошибка при проверке регистрации:", error);
      showToast("error");
      return false;
    }
  };

  const sendToMockApi = async (data) => {
    try {
      const userExists = await checkUserExists(data.telephone);
      if (userExists) {
        if (data.username !== userExists.name) {
          try {
            await axios.put(
              `https://66a8b255e40d3aa6ff5902eb.mockapi.io/players/${userExists.id}`,
              {
                name: data.username,
                phone: userExists.phone,
                coin: userExists.coin,
              }
            );
          } catch (error) {
            console.error("Ошибка обновления имени пользователя:", error);
            showToast("error");
            return;
          }
        }
        setUser(data.username, data.telephone);
        setCoin(userExists.coin);
        showToast("success");
        setTimeout(() => {
          navigate("/game");
        }, 2500);
        return;
      }

      const url = "https://66a8b255e40d3aa6ff5902eb.mockapi.io/players";

      await axios.post(url, {
        name: data.username,
        phone: data.telephone,
        coin: 0,
      });
      showToast("success");
      setUser(data.username, data.telephone);
      setCoin(0);
      setTimeout(() => {
        navigate("/game");
      }, 2500);
    } catch (error) {
      console.error("Ошибка:", error);
      showToast("error");
    }
  };

  const onSubmit = (data) => {
    sendToMockApi(data);
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
          <h2>Registration/ Login</h2>
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
                    value: /^[a-zA-Zа-яА-ЯёЁ]{3,}$/,
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
                id="telephone"
                className={styles.formInput}
                {...register("telephone", {
                  required: "Введите номер телефона",
                  pattern: {
                    value: /^\+996 \d{3} \d{3} \d{3}$/,
                    message: "Формат: +996 XXX XXX XXX",
                  },
                })}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handlePhoneChange}
                value={phoneValue}
                maxLength={16}
              />
              <label htmlFor="telephone">Telephone number</label>
              {errors.telephone && (
                <span className={styles.error}>{errors.telephone.message}</span>
              )}
            </div>
            <button type="submit" className={styles.btn}>
              Войти!
            </button>
          </form>
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
            : "Что-то пошло не так("}
        </div>
      )}
    </section>
  );
};
