import React, { useState, useEffect, useRef } from "react";
import goldMug from "../assets/images/goldMug.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const WhatIsCpaComponent = () => {
  const [clients, setClients] = useState(0);
  const income = clients * 3352;
  const containerRef = useRef(null);

  useEffect(() => {
    // Анимация при появлении на экране
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Начинаем анимацию, когда 80% компонента видно
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

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
    <div className="page" id="page-2" ref={containerRef}>
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
