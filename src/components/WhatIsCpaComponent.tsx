import React, { useState, useEffect } from "react";
import goldMug from "../assets/images/goldMug.png";
import { gsap } from "gsap";

export const WhatIsCpaComponent = () => {
  const [clients, setClients] = useState(0);
  const income = clients * 3352;

  useEffect(() => {
    if (clients >= 900) {
      gsap.to(".calculator-container", {
        scale: 1.1,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to("#income-result", {
        color: "#FF4500",
        fontSize: "48px",
        duration: 0.5,
      });
    } else {
      gsap.to(".calculator-container", {
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to("#income-result", {
        color: "#FFD700",
        fontSize: "36px",
        duration: 0.5,
      });
    }
  }, [clients]);

  return (
    <div className="page" id="page-2">
      <div className="cpa-container">
        <h2>
          Что такое <span className="cpa-bold">CPA</span>
        </h2>
        <p className="center-align">
          Веб-мастер размещает у себя рекламные предложения и получает деньги за
          действия пользователей
        </p>
        <p className="center-align">
          Бизнес получает дополнительный трафик и дополнительные продажи
        </p>
      </div>

      <div className="calculator-container">
        <h2>Калькулятор вашего дохода</h2>
        <div className="slider-container">
          <label htmlFor="clients">Кол-во привлеченных клиентов</label>
          <input
            type="range"
            id="clients"
            name="clients"
            min="0"
            max="1000"
            value={clients}
            step="10"
            onChange={(e) => setClients(parseInt(e.target.value))}
          />
          <span id="clients-value">{clients}</span>
        </div>
        <div className="income-container">
          <img src={goldMug} alt="Gold Mug" />
          <p>Ваш доход</p>
          <p id="income-result">{income.toLocaleString()} ₽</p>
        </div>
      </div>
    </div>
  );
};
