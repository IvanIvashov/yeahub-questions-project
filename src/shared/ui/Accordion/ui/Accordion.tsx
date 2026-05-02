import { Link } from "react-router-dom";
import { useState } from "react";
import type {AccordionProps} from '../model/type'
import iconArrow from "../assets/accordion.svg";
import styles from "./style.module.css";

function Accordion({ question }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
	
  return (
    <div className={styles.questionAccordion}>
      <div
        className={styles.accordionTitle}
        onClick={() => setIsOpen((prev) => !prev)}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen((prev) => !prev);
          }
        }}
      >
        <div className={styles.circle} />
        <h2 className={styles.heading}>{question.title}</h2>
        <button className={styles.btnAccordion}>
          <img
            src={iconArrow}
            alt="Стрелка аккордиона"
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
          {question.imageSrc && (
            <img src={question.imageSrc} alt="Описание вопросов" />
          )}

          <div className={styles.descriptions}>
            <p className={styles.descQuestion}>
              {question.longAnswer ||
                question.description ||
                "Описание отсутствует"}
            </p>
          </div>
          <Link to={`/details/${question.id}`} className={styles.detailsBtn}>
            Подробнее...
          </Link>
        </div>
      )}
    </div>
  );
}

export default Accordion;
