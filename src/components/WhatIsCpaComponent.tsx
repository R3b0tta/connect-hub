import React, { useState, useEffect, useRef } from "react";
import goldMug from "../assets/images/goldMug.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const WhatIsCpaComponent: React.FC = () => {
  const [clients, setClients] = useState<number>(0);
  const income = clients * 3352;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLHeadingElement | null>(null);
  const pRefs = useRef<HTMLParagraphElement[]>([]);
  const calculatorRef = useRef<HTMLDivElement | null>(null);
  const mugRef = useRef<HTMLImageElement | null>(null);
  const incomeRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !h2Ref.current || !calculatorRef.current)
      return;

    const paragraphs = pRefs.current.filter((p) => p !== null);
    const allElements = [
      containerRef.current,
      h2Ref.current,
      ...paragraphs,
      calculatorRef.current,
    ];

    gsap.set(allElements, { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.to(allElements, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  const handleClientsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setClients(value);

    if (mugRef.current) {
      const scale = 1 + (value / 5000) * 0.3;
      gsap.to(mugRef.current, {
        scale: scale,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (incomeRef.current) {
      const color = value > 4000 ? "red" : "gold";
      gsap.to(incomeRef.current, {
        color: color,
        duration: 0.3,
      });
    }
  };

  return (
    <div className="page" id="page-2" ref={containerRef}>
      <div className="cpa-container">
        <h2 ref={h2Ref}>
          Что такое <span className="cpa-bold">CPA</span>
        </h2>
        {[
          "Веб-мастер размещает у себя рекламные предложения и получает деньги за действия пользователей.",
          "Бизнес получает дополнительный трафик и дополнительные продажи.",
        ].map((text, index) => (
          <p
            className="center-align"
            key={index}
            ref={(el) => {
              if (el) pRefs.current[index] = el;
            }}
          >
            <b>{index === 0 ? "Веб-мастер" : "Бизнес"}</b> {text}
          </p>
        ))}
      </div>

      <div className="calculator-container" ref={calculatorRef}>
        <h2>Калькулятор вашего дохода</h2>
        <div className="slider-container">
          <label htmlFor="clients">Кол-во привлеченных клиентов</label>
          <input
            type="range"
            id="clients"
            name="clients"
            min="0"
            max="5000"
            value={clients}
            step="50"
            onChange={handleClientsChange}
            style={{
              cursor: "pointer",
              height: "20px",
            }}
          />
          <span id="clients-value">{clients}</span>
        </div>
        <div ref={mugRef} className="income-container">
          <img src={goldMug} alt="Gold Mug" />
          <p>Ваш доход</p>
          <p id="income-result" ref={incomeRef} style={{ color: "gold" }}>
            {income.toLocaleString()} ₽
          </p>
        </div>
      </div>
    </div>
  );
};
