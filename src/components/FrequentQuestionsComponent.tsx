import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export const FrequentQuestionsComponent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "Сколько я могу заработать?",
      answer:
        "Доход зависит от выбранных предложений, количества привлечённых клиентов и ставок за действия. Некоторые партнёры зарабатывают от 10 000 рублей в месяц, а топовые — сотни тысяч.",
    },
    {
      question: "Как я получу свои деньги?",
      answer:
        "Мы выплачиваем деньги удобным для вас способом: на банковскую карту, электронный кошелёк или через другие платёжные системы. Минимальная сумма выплаты — 1000 рублей.",
    },
    {
      question: "Как отслеживать результаты?",
      answer:
        "В вашем личном кабинете доступна подробная статистика: количество переходов, заявок, продаж и ваш доход. Вы можете отслеживать результаты в реальном времени.",
    },
    {
      question: "Есть ли ограничения по трафику?",
      answer:
        "Мы работаем с разными источниками трафика: сайты, соцсети, блоги, каналы. Главное — чтобы трафик был легальным и соответствовал нашим правилам.",
    },
    {
      question: "Что делать, если у меня мало трафика?",
      answer:
        "Даже с небольшим трафиком можно начать зарабатывать. Мы поможем вам выбрать предложения с высокой конверсией, чтобы максимизировать ваш доход.",
    },
    {
      question: "Какова минимальная сумма для старта?",
      answer:
        "Для начала работы не требуется никаких вложений. Вы просто регистрируетесь, выбираете предложения и начинаете зарабатывать.",
    },
    {
      question: "Что делать, если возникли проблемы?",
      answer:
        "Наша служба поддержки работает 24/7. Вы можете написать нам в чат, на почту или позвонить — мы всегда готовы помочь.",
    },
  ];

  return (
    <div className="page" id="page-5">
      <div className="faq-container">
        <div className="faq-title">
          <h2>Часто задаваемые вопросы</h2>
        </div>
        <div className="faq-questions">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                {item.question}
                <span
                  className="arrow"
                  style={{
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </div>
              <div
                className={`faq-answer ${openIndex === index ? "active" : ""}`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
