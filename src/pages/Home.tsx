import React, { useState, useEffect, useRef } from "react";
import { MainHeader } from "../components/MainHeader";
import { WhatIsCpaComponent } from "../components/WhatIsCpaComponent";
import { Blog } from "../components/Blog";
import { WhyWeComponent } from "../components/WhyWeComponent";
import { FrequentQuestionsComponent } from "../components/FrequentQuestionsComponent";
import { Footer } from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export const Home: React.FC = () => {
  const [index, setIndex] = useState(0);
  const isScrolling = useRef(false); // Теперь это ref, а не state

  const pages = [
    <MainHeader key="header" />,
    <WhatIsCpaComponent key="cpa" />,
    <Blog key="blog" />,
    <WhyWeComponent key="why" />,
    <FrequentQuestionsComponent key="faq" />,
    <Footer key="footer" />,
  ];

  const changeSlide = (direction: "up" | "down") => {
    if (isScrolling.current) return; // Проверяем ref
    isScrolling.current = true; // Блокируем

    setIndex((prev) => {
      if (direction === "up") return Math.min(prev + 1, pages.length - 1);
      if (direction === "down") return Math.max(prev - 1, 0);
      return prev;
    });

    setTimeout(() => {
      isScrolling.current = false; // Разблокируем через 800 мс
    }, 800);
  };

  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };

    disableScroll();
    return () => enableScroll();
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout; // Храним таймер для debounce

    const handleWheel = (event: WheelEvent) => {
      if (isScrolling.current) return;

      clearTimeout(timeout); // Очищаем прошлый таймер
      timeout = setTimeout(() => {
        if (event.deltaY > 0) changeSlide("up");
        if (event.deltaY < 0) changeSlide("down");
      }, 100); // 100 мс задержка, чтобы избежать двойных вызовов
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="page"
        >
          {pages[index]}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
