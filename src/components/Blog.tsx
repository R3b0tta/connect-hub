import React, { useEffect, useRef } from "react";
import clever from "../assets/images/clever.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Blog: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const columnsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Анимация появления секции и всех элементов
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
    )
      .fromTo(
        columnsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0 },
        "-=0.8", // Синхронизация с появлением секции
      )
      .fromTo(
        ".bottom-image img",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
        "-=0.8", // Синхронизация с колонками
      );
  }, []);

  return (
    <div className="page" id="page-3" ref={containerRef}>
      <div className="center-top-text">
        <h2>У тебя есть свой Блог</h2>
        <p>Подключайся к Connect-hub и зарабатывай</p>
      </div>
      <div className="columns-container">
        {[
          {
            title: "Много офферов",
            text: "Каждый найдет рекламу, которая подойдёт именно его аудитории.",
          },
          {
            title: "Доверие и прозрачность",
            text: "Открытая статистика, дружелюбный подход и решение любых вопросов.",
          },
          {
            title: "Безопасность",
            text: "Работаем с именитыми брендами с хорошей репутацией.",
          },
        ].map((item, index) => (
          <div
            className="column"
            key={index}
            ref={(el) => {
              if (el) columnsRef.current[index] = el;
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="bottom-image">
        <img src={clever} alt="clever" />
      </div>
    </div>
  );
};
