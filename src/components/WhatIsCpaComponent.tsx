import React from "react";
import goldMug from "../assets/images/goldMug.png";

export const WhatIsCpaComponent = () => {
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
            value="0"
            step="10"
          />
          <span id="clients-value">0</span>
        </div>
        <div className="income-container">
          <img src={goldMug} alt="Gay Image" />
          <p>Ваш доход</p>
          <p id="income-result">0 ₽</p>
        </div>
      </div>
    </div>
  );
};
