import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import clever from "../../assets/images/4clever.png";
import choice from "../../assets/images/choice.png";
import greenArrow from "../../assets/images/green-arrow.png";
import coins from "../../assets/images/coins.png";

export const Footer = () => {
  return (
    <>
      {/* Секция "Как начать работать" */}
      <div className="page" id="page-6">
        <div className={styles.upper}>
          {/* Левый блок с шагами */}
          <div className={styles.upper__left}>
            {[
              {
                icon: clever,
                text: (
                  <>
                    1. Зарегистрируйтесь <br />
                    После регистрации вы получите доступ к 200+ офферам в
                    различных нишах. Это ваш первый шаг к началу заработка.
                  </>
                ),
              },
              {
                icon: choice,
                text: (
                  <>
                    2. Выберите оффер <br />
                    Подберите подходящее предложение из нашего каталога. Мы
                    предлагаем офферы для разных аудиторий и интересов.
                  </>
                ),
              },
              {
                icon: greenArrow,
                text: (
                  <>
                    3. Запустите трафик <br />
                    Начинайте привлекать пользователей на офферы. Чем больше
                    целевых действий (покупок, заявок, регистраций) выполнит
                    ваша аудитория, тем выше ваш доход.
                  </>
                ),
              },
              {
                icon: coins,
                text: (
                  <>
                    4. Зарабатывайте <br />
                    Получайте вознаграждение за каждое действие ваших
                    пользователей. Выводите заработанные деньги удобным для вас
                    способом — быстро и без лишних сложностей.
                  </>
                ),
              },
            ].map((item, index) => (
              <div key={index} className={styles.upper__leftItem}>
                <img src={item.icon} alt={`Step ${index + 1}`} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Правая кнопка "Стать партнером" */}
          <div className={styles.upper__right}>
            <Link className={styles.upper__rightButton} to="/connect-hub/form">
              Стать партнером
            </Link>
          </div>
        </div>
      </div>

      {/* Секция футера */}
      <div className="page" id="page-7">
        <div className={styles.footer}>
          {/* Логотип */}
          <div className={styles.footer__logo}>Connect-Hub</div>

          {/* Контакты */}
          <div className={styles.footer__contacts}>
            <div className={styles.footer__contactsTitle}>Контакты</div>
            <div className={styles.footer__contactsItem}>
              +7 (901) 802 74 00
            </div>
            <div className={styles.footer__contactsItem}>
              Техподдержка: suport@connect-hub.ru <br />
              Ваши предложения: Info@connect-hub.ru
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
