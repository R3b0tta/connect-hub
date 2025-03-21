import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import leprekonBoot from "../assets/images/leprekonBoots .png";
import pipe from "../assets/images/pipe.png";

gsap.registerPlugin(ScrollTrigger);

export const WhyWeComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Анимация заголовка и текста
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    // Анимация каждого пункта списка по очереди
    paragraphsRef.current.forEach((p, index) => {
      if (!p) return;
      gsap.fromTo(
        p,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: p,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    // Анимация изображений (левая двигается справа налево, правая — слева направо)
    gsap.fromTo(
      imagesRef.current[0],
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imagesRef.current[0],
          start: "top 90%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      imagesRef.current[1],
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imagesRef.current[1],
          start: "top 90%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <div className="page" id="page-4" ref={containerRef}>
      <div className="center-top-text" ref={textRef}>
        <h2>
          <span className="cpa-text">CPA</span> с человеческим лицом
        </h2>
        <p>
          <strong>
            <span className="cpa-text">CPA</span> — это не просто реклама, это
            партнёрство. Мы помогаем бизнесу привлекать клиентов.
          </strong>
        </p>
        <p className="second-line">
          <strong>
            Вы платите только за результат, а мы берём на себя всё остальное.
          </strong>
        </p>
      </div>
      <div className="why-we">
        <h3>
          Почему мы<span className="soft-sign">?</span>
        </h3>
        {[
          {
            title: "Широкая сеть партнёров:",
            text: "большая база веб-мастеров и блогеров, также ежедневно мы сами ищем новых инфлюенсеров.",
          },
          {
            title: "Гибкие условия:",
            text: "вы сами выбираете, за что платить и сколько.",
          },
          {
            title: "Поддержка 24/7:",
            text: "мы всегда на связи, чтобы помочь с настройкой и решением вопросов.",
          },
        ].map((item, index) => (
          <p
            key={index}
            ref={(el) => {
              if (el) paragraphsRef.current[index] = el;
            }}
          >
            <strong>{item.title}</strong> {item.text}
          </p>
        ))}
      </div>
      <div className="bottom-images">
        <img
          src={leprekonBoot}
          alt="leprekonBoots"
          className="left-image"
          ref={(el) => {
            if (el) imagesRef.current[0] = el;
          }}
        />
        <img
          src={pipe}
          alt="pipe"
          className="right-image"
          ref={(el) => {
            if (el) imagesRef.current[1] = el;
          }}
        />
      </div>
    </div>
  );
};
