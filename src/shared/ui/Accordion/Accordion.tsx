import { useState } from "react";
import iconArrow from "./assets/accordion.svg";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

function Accordion({ question, img }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={styles.questionAccordion}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className={styles.accordionTitle}>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#5533FF" />
        </svg>
        <h2 className={styles.heading}>{question.title}</h2>
        <button className={styles.btnAccordion}>
          <img
            src={iconArrow}
            alt="arrowAccordion"
            className={`${styles.btnTransition} ${isOpen ? styles.arrowRotate : ""}`}
          />
        </button>
      </div>
      {isOpen && (
        <div className={styles.questionContent}>
          <div className={styles.ratingAndDifficulty}>
            <p>
              Рейтинг: <span>{question.rate}</span>
            </p>
            <p>
              Сложность: <span>{question.complexity}</span>
            </p>
          </div>
          {img && <img src={question.imageSrc} alt="Описание вопросов" />}

          <div className={styles.descriptions}>
            <p className={styles.descQuestion}>
              {question.longAnswer ||
                question.description ||
                "Описание отсутствует"}
            </p>
          </div>
          <Link to={"/details"} className={styles.detailsBtn}>
            Подробнее...
          </Link>
        </div>
      )}
    </div>
  );
}

export default Accordion;
