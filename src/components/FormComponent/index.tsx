import React from "react";
import styles from "./FormComponent.module.scss";

export const FormComponent = () => {
  return (
    <div className={styles.root}>
      <h1>Обратная форма</h1>

      <div className={styles.inputGroup}>
        <div className={styles.roleSelector} id="role">
          <div
            className={`${styles.roleOption} ${styles.active}`}
            data-role="webmaster"
          >
            Вебмастер
          </div>
          <div className={styles.separator}></div>
          <div className={styles.roleOption} data-role="partner">
            Партнер
          </div>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="text"
          id="name"
          className={styles.inputField}
          placeholder="Имя"
          required
          pattern="[A-Za-zА-Яа-яЁё\s]+"
          title="Только буквы"
        />
        <div className={styles.errorMessage} id="name-error"></div>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="email"
          id="email"
          className={styles.inputField}
          placeholder="E-mail"
          required
          pattern="[A-Za-z0-9-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,6}"
          title="Только латиница, цифры, '-' и '@'"
        />
        <div className={styles.errorMessage} id="email-error"></div>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="tel"
          id="phone"
          className={styles.inputField}
          placeholder="Номер телефона"
          required
          pattern="^\+?\d+$"
          title="Телефон может содержать только цифры и знак +"
        />
        <div className={styles.errorMessage} id="phone-error"></div>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="text"
          id="telegram"
          className={styles.inputField}
          placeholder="Telegram"
          required
          pattern="[A-Za-z0-9_]+"
          title="Только латиница и цифры"
        />
        <div className={styles.errorMessage} id="telegram-error"></div>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="text"
          id="business"
          className={styles.inputField}
          placeholder="В какой сфере ваш бизнес?"
          required
          pattern="[А-Яа-яЁё\s]+"
          title="Только кириллица"
        />
        <div className={styles.errorMessage} id="business-error"></div>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="url"
          id="website"
          className={styles.inputField}
          placeholder="Ссылка на ваш сайт"
          required
        />
        <div className={styles.errorMessage} id="website-error"></div>
      </div>

      <div className={styles.consentSection}>
        <div className={styles.checkboxContainer}>
          <div className={styles.checkbox} id="consent1"></div>
          <p
            className={`${styles.consentText} ${styles.consentTextRight} ${styles.longText}`}
          >
            Я даю свое согласие на получение персональных рассылок <br /> с
            помощью SMS и email
          </p>
        </div>

        <div className={styles.checkboxContainer}>
          <div className={styles.checkbox} id="consent2"></div>
          <p className={`${styles.consentText} ${styles.consentTextLeft}`}>
            Я даю свое согласие на обработку персональных данных
          </p>
        </div>
      </div>

      <div className={styles.submitButton} id="submit-form">
        Оставить заявку
      </div>
    </div>
  );
};
