import styles from "./style.module.css";
import iconArrow from "./assets/accordeon.svg";
import content from "./assets/content.png";
import { useState } from "react";

function QuestionList() {
  const [toggleArrow, setToggleArrow] = useState(false);
  

  return (
    <div className={styles.wrapper}>
      <div className={styles.questionList}>
        <div className={styles.questionTitle}>
          <h1 className={styles.title}>Вопросы React, JavaScript</h1>
        </div>
        <div className={styles.questionAccordion}>
          <div
            className={styles.accordionTitle}
            onClick={() => setToggleArrow((prev) => !prev)}
          >
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#5533FF" />
            </svg>
            <h2 className={styles.heading}>
              Что такое Virtual DOM, и как он работает?
            </h2>
            <button className={styles.btnAccordion}>
              <img
                src={iconArrow}
                alt="arrowAccordion"
                className={`${styles.btnTransition} ${toggleArrow ? styles.arrowRotate : ""}`}
              />
            </button>
          </div>
          {toggleArrow && (
            <div className={styles.questionContent}>
              <div className={styles.ratingAndDifficulty}>
                <p>
                  Рейтинг: <span>4</span>
                </p>
                <p>
                  Сложность: <span>10</span>
                </p>
              </div>
              <img src={content} alt="Описание вопросв" />
              <div className={styles.descriptions}>
                <p className={styles.descQuestion}>
                  Virtual DOM (виртуальный DOM) — это программная концепция,
                  используемая в разработке веб-приложений для повышения
                  эффективности обновлений интерфейса. Это представление
                  реального DOM (структуры документа, отображаемого в браузере)
                  в памяти, которое позволяет оптимизировать изменения,
                  минимизируя взаимодействие с реальным DOM, что ускоряет
                  рендеринг и обновление страниц. При изменении данных
                  приложения Virtual DOM сравнивает новое состояние с предыдущим
                  и обновляет только те части реального DOM, которые изменились,
                  вместо перерисовки всего документа.
                </p>
              </div>
              <button className={styles.detailsBtn}>Подробнее...</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionList;
