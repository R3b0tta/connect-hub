import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

interface Phrase {
  text: string;
  color: string;
}

export const MainHeader: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const phrases: Phrase[] = [
    { text: "блог", color: "#01C847" },
    { text: "телеграмм", color: "#01C847" },
    { text: "сайт", color: "#01C847" },
  ];

  // Обработчик для открытия меню
  const handleMenuHover = (): void => {
    setMenuVisible(true);
    document.body.classList.add("menu-open");
  };

  // Обработчик для закрытия меню
  const handleMouseLeave = (): void => {
    setMenuVisible(false);
    document.body.classList.remove("menu-open");
  };
  // Смена текста в "или блог"
  useEffect(() => {
    if (menuVisible) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [menuVisible]);

  return (
    <div className="page" id="page-1">
      <div className="header">
        <div className="connect-hub">
          <h1>Connect-Hub</h1>
        </div>
        <div
          className="menu-icon"
          id="menu-icon"
          onMouseEnter={handleMenuHover}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* Меню */}
      <div
        className={`nav-menu ${menuVisible ? "visible" : ""}`}
        id="nav-menu"
        onMouseLeave={handleMouseLeave}
      >
        <div className="close-button" onClick={handleMouseLeave}>
          &times;
        </div>
        <div className="contact-buttons">
          <a
            href="https://t.me/tgid033"
            className="contact-button telegram-button"
          >
            Telegram
          </a>
          <a
            href="mailto:info@connect-hub.ru"
            className="contact-button email-button"
          >
            Почта
          </a>
        </div>
      </div>

      <div className="content-container">
        <div className="center-text" id="text-container">
          <p className="text-main">Монетизируйте ваше</p>
          <p className="text-highlight">творчество</p>
        </div>
        <div className="flip-text">
          <p id="flip-text-content">
            <span style={{ color: "#F2E3D0" }}>или</span>{" "}
            <span style={{ color: phrases[currentIndex].color }}>
              {phrases[currentIndex].text}
            </span>
          </p>
        </div>
        <Link to="/form" className="partner-button">
          Стать партнером
        </Link>
      </div>
    </div>
  );
};
