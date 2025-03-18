import React from "react";
import clever from "../assets/images/clever.png";

export const Blog = () => {
  return (
    <div className="page" id="page-3">
      <div className="center-top-text">
        <h2>У тебя есть свой Блог</h2>
        <p>Подключайся к Connect-hub и зарабатывай</p>
      </div>
      <div className="columns-container">
        <div className="column">
          <h3>Много офферов</h3>
          <p>
            Каждый найдет рекламу, которая подойдёт
            <br />
            именно его аудитории.
          </p>
        </div>
        <div className="column">
          <h3>Доверие и прозрачность</h3>
          <p>
            Открытая статистика, дружелюбный подход
            <br />и решение любых вопросов.
          </p>
        </div>
        <div className="column">
          <h3>Безопасность</h3>
          <p>
            Работаем с именитыми брендами
            <br />с хорошей репутацией.
          </p>
        </div>
      </div>
      <div className="bottom-image">
        <img src={clever} alt="clever" />
      </div>
    </div>
  );
};
