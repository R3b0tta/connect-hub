import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./FormComponent.module.scss";

// Создаем схему Zod для валидации
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
  business: z
    .string()
    .min(1, "Укажите сферу бизнеса")
    .regex(/^[А-Яа-яЁё\s]+$/, "Только кириллица"),
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
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { role: "webmaster" }, // Устанавливаем роль по умолчанию как 'webmaster'
  });

  // Следим за текущим значением роли
  const selectedRole = watch("role");

  // Обработчик отправки формы
  const onSubmit = (data: any) => {
    console.log(data);
  };

  // Обработчик выбора роли
  const handleRoleChange = (role: "webmaster" | "partner") => {
    setValue("role", role);
  };

  return (
    <div className={styles.root}>
      <h1>Обратная форма</h1>

      <div className={styles.inputGroup}>
        <div className={styles.roleSelector}>
          <div
            className={`${styles.roleOption} ${selectedRole === "webmaster" ? styles.active : ""}`}
            onClick={() => handleRoleChange("webmaster")}
          >
            Вебмастер
          </div>
          <div className={styles.separator}></div>
          <div
            className={`${styles.roleOption} ${selectedRole === "partner" ? styles.active : ""}`}
            onClick={() => handleRoleChange("partner")}
          >
            Партнер
          </div>
        </div>
        {errors.role && (
          <div className={styles.errorMessage}>{errors.role.message}</div>
        )}
      </div>

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
            className={`${styles.consentText} ${styles.consentTextRight} ${styles.longText}`}
          >
            Я даю свое согласие на получение персональных рассылок <br /> с
            помощью SMS и email
          </label>
        </div>

        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            {...register("consent2")}
            id="consent2"
            className={styles.checkbox}
          />
          <label
            htmlFor="consent2"
            className={`${styles.consentText} ${styles.consentTextLeft}`}
          >
            Я даю свое согласие на обработку персональных данных
          </label>
        </div>
      </div>

      <div className={styles.submitButton} onClick={handleSubmit(onSubmit)}>
        Оставить заявку
      </div>
    </div>
  );
};
