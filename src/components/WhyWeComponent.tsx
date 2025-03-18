import React from "react";
import leprekonBoots from "../assets/images/leprekonBoots .png";
import pipe from "../assets/images/pipe.png";

export const WhyWeComponent = () => {
  return (
    <div className="page" id="page-4">
      <div className="center-top-text">
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
        <p>
          <strong>Широкая сеть партнёров:</strong> большая база веб-мастеров и
          блогеров,
          <br />
          также ежедневно мы сами ищем новых инфлюенсеров.
        </p>
        <p>
          <strong>Гибкие условия:</strong> вы сами выбираете, за что платить и
          сколько.
        </p>
        <p>
          <strong>
            Поддержка <span className="non-bold">24/7</span>:
          </strong>{" "}
          мы всегда на связи, чтобы помочь
          <br />с настройкой и решением вопросов.
        </p>
      </div>
      <div className="bottom-images">
        <img src={leprekonBoots} alt="leprekonBoots" className="left-image" />
        <img src={pipe} alt="pipe" className="right-image" />
      </div>
    </div>
  );
};
