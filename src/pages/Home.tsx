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
  const [isMobile, setIsMobile] = useState(false);
  const isScrolling = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const pages = [
    <MainHeader key="header" />,
    <WhatIsCpaComponent key="cpa" />,
    <Blog key="blog" />,
    <WhyWeComponent key="why" />,
    <FrequentQuestionsComponent key="faq" />,
    <Footer key="footer" />,
  ];

  // Определение мобильного устройства
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Управление скроллом для десктопа
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "auto";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      isScrolling.current = true;
      if (e.deltaY > 0) {
        setIndex((prev) => Math.min(prev + 1, pages.length - 1));
      } else {
        setIndex((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isMobile, pages.length]);

  // Режим мобильного устройства - обычная прокрутка
  if (isMobile) {
    return (
      <div ref={containerRef}>
        {pages.map((page, i) => (
          <div key={i}>{page}</div>
        ))}
      </div>
    );
  }

  // Режим десктопа - слайдер с анимациями
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {pages[index]}
      </motion.div>
    </AnimatePresence>
  );
};
