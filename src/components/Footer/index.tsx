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
      <div className="page" id="page-6">
        <div className={styles.upper}>
          <div className={styles.upper__left}>
            <div className={styles.upper__leftItem}>
              <img src={clever} alt="4clever" />
              <p>
                1. Зарегистрируйтесь <br />
                После регистрации вы получите доступ к 200+
                <br />
                офферам в различных нишах. Это ваш первый шаг к началу
                заработка.
              </p>
            </div>
            <div className={styles.upper__leftItem}>
              <img src={choice} alt="choice" />
              <p>
                2. Выберите оффер <br /> Подберите подходящее предложение из
                нашего каталога. <br /> Мы предлагаем офферы для разных
                аудиторий и интересов.
              </p>
            </div>
            <div className={styles.upper__leftItem}>
              <img src={greenArrow} alt="greenArrow" />
              <p>
                3. Запустите трафик <br /> Начинайте привлекать пользователей на
                офферы. Чем больше целевых действий <br /> (покупок, заявок,
                регистраций) выполнит ваша аудитория, тем выше ваш доход.
              </p>
            </div>
            <div className={styles.upper__leftItem}>
              <img src={coins} alt="coins" />
              <p>
                4. Зарабатывайте <br /> Получайте вознаграждение за каждое
                действие ваших пользователей. <br /> Выводите заработанные
                деньги удобным для вас способом — быстро и без лишних
                сложностей.
              </p>
            </div>
          </div>
          <div className={styles.upper__right}>
            <Link to="/form">
              <button className={styles.upper__rightButton}>
                Стать партнером
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footer} id="page-7">
        <div className={styles.footer}>
          <div className={styles.footer__logo}>Connect-Hub</div>
          <div className={styles.footer__contacts}>
            <div className={styles.footer__contactsTitle}>Контакты</div>
            <div className={styles.footer__contactsItem}>
              +7 (901) 802 74 00
            </div>
            <div className={styles.footer__contactsItem}>
              Техподдержка: suport@connect-hub.ru <br />
              Ваши предложения: Info@connect-hub.ru
            </div>
            <div className={styles.footer__contactsItem}>
              Telegram: @partner_connect_hub x{" "}
            </div>
          </div>
          <div className={styles.footer__nav}>
            <div className={styles.footer__navTitle}>Навигация</div>
            <div className={styles.footer__navItem}>
              <a href="#page-1">Главная</a>
              <a href="#page-2">Веб-мастерам</a>
              <a href="#page-3">Партнерам</a>
              <a href="#page-5">FAQ</a>
              <a href="#page-6">Как начать работать</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
