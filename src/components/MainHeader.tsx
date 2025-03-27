import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tg from "../assets/images/tg.svg";
import phone from "../assets/images/phone.svg";
import mail from "../assets/images/mail.svg";
import gnomWithCoin from "../assets/images/gnom_with_coin.png";

interface Phrase {
  text: string;
  color: string;
}

export const MainHeader: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const phrases: Phrase[] = [
    { text: "Блог", color: "#FFFE00" },
    { text: "Telegram", color: "#27A7E7" },
    { text: "Сайт", color: "#01C847" },
    { text: "Twitch", color: "#6441A5" },
    { text: "YouTube", color: "#C4302B" },
  ];

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
      </div>
      <div className="main-content">
        <div className="main-left">
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
            <div className="partner-button-container">
              <Link to="/connect-hub/form" className="partner-button">
                Стать партнером
              </Link>
            </div>
          </div>
        </div>
        <div className="main-right">
          <img src={gnomWithCoin} alt="gnom_with_coin" />
        </div>
      </div>
    </div>
  );
};
