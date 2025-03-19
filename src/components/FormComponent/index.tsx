import React from "react";
import { useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm as useFormspree, ValidationError } from "@formspree/react";
import styles from "./FormComponent.module.scss";

// Схема валидации через Zod
const schema = z.object({
  role: z.enum(["webmaster", "partner"], {
    errorMap: () => ({ message: "Выберите роль" }),
  }),
  name: z
    .string()
    .min(1, "Имя обязательно")
    .regex(/^[A-Za-zА-Яа-яЁё\s]+$/, "Только буквы"),
  email: z.string().email("Некорректный email"),
  phone: z
    .string()
    .regex(/^\+?\d+$/, "Телефон может содержать только цифры и знак +"),
  telegram: z.string().regex(/^[A-Za-z0-9_]+$/, "Только латиница и цифры"),
  business: z.string().min(1, "Укажите сферу бизнеса"),
  website: z.string().url("Некорректная ссылка"),
  consent1: z
    .boolean()
    .refine((val) => val, "Вы должны согласиться на получение рассылок"),
  consent2: z
    .boolean()
    .refine(
      (val) => val,
      "Вы должны согласиться на обработку персональных данных",
    ),
});

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useReactHookForm({
    resolver: zodResolver(schema),
    defaultValues: { role: "webmaster" },
  });

  // Используем useForm из Formspree
  const [state, formspreeSubmit] = useFormspree("movejdbp");

  // Следим за текущей выбранной ролью
  const selectedRole = watch("role");

  // Обработчик отправки формы
  const onSubmit = async (data: any) => {
    await formspreeSubmit(data);
  };

  return (
    <div className={styles.root}>
      <h1>Обратная форма</h1>

      {state.succeeded && (
        <p className={styles.successMessage}>Спасибо за отправку!</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Выбор роли */}
        <div className={styles.inputGroup}>
          <div className={styles.roleSelector}>
            <div
              className={`${styles.roleOption} ${selectedRole === "webmaster" ? styles.active : ""}`}
              onClick={() => setValue("role", "webmaster")}
            >
              Вебмастер
            </div>
            <div className={styles.separator}></div>
            <div
              className={`${styles.roleOption} ${selectedRole === "partner" ? styles.active : ""}`}
              onClick={() => setValue("role", "partner")}
            >
              Партнер
            </div>
          </div>
          {errors.role && (
            <div className={styles.errorMessage}>{errors.role.message}</div>
          )}
        </div>

        {/* Поля формы */}
        <div className={styles.inputGroup}>
          <input
            type="text"
            {...register("name")}
            className={styles.inputField}
            placeholder="Имя"
          />
          {errors.name && (
            <div className={styles.errorMessage}>{errors.name.message}</div>
          )}
        </div>

        <div className={styles.inputGroup}>
          <input
            type="email"
            {...register("email")}
            className={styles.inputField}
            placeholder="E-mail"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          {errors.email && (
            <div className={styles.errorMessage}>{errors.email.message}</div>
          )}
        </div>

        <div className={styles.inputGroup}>
          <input
            type="tel"
            {...register("phone")}
            className={styles.inputField}
            placeholder="Номер телефона"
          />
          {errors.phone && (
            <div className={styles.errorMessage}>{errors.phone.message}</div>
          )}
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            {...register("telegram")}
            className={styles.inputField}
            placeholder="Telegram"
          />
          {errors.telegram && (
            <div className={styles.errorMessage}>{errors.telegram.message}</div>
          )}
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            {...register("business")}
            className={styles.inputField}
            placeholder="В какой сфере ваш бизнес?"
          />
          {errors.business && (
            <div className={styles.errorMessage}>{errors.business.message}</div>
          )}
        </div>

        <div className={styles.inputGroup}>
          <input
            type="url"
            {...register("website")}
            className={styles.inputField}
            placeholder="Ссылка на ваш сайт"
          />
          {errors.website && (
            <div className={styles.errorMessage}>{errors.website.message}</div>
          )}
        </div>

        {/* Чекбоксы */}
        <div className={styles.consentSection}>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              {...register("consent1")}
              id="consent1"
              className={styles.checkbox}
            />
            <label
              htmlFor="consent1"
              className={`${styles.consentText} ${styles.longText}`}
            >
              Я даю свое согласие на получение персональных рассылок <br /> с
              помощью SMS и email
            </label>
          </div>
          {errors.consent1 && (
            <div className={styles.errorMessage}>{errors.consent1.message}</div>
          )}

          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              {...register("consent2")}
              id="consent2"
              className={styles.checkbox}
            />
            <label htmlFor="consent2" className={styles.consentText}>
              Я даю свое согласие на обработку персональных данных
            </label>
          </div>
          {errors.consent2 && (
            <div className={styles.errorMessage}>{errors.consent2.message}</div>
          )}
        </div>

        {/* Кнопка отправки */}
        <button
          type="submit"
          className={styles.submitButton}
          disabled={state.submitting}
        >
          Оставить заявку
        </button>
      </form>
    </div>
  );
};
