import { Link } from "react-router-dom";
import { useState, useRef, useLayoutEffect } from "react";
import type { AccordionProps } from "../model/type";
import iconArrow from "../assets/accordion.svg";
import styles from "./style.module.css";

function Accordion({ question }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<number | string>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(isOpen ? contentHeight : 0);
    }
  }, [isOpen, question]);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.questionAccordion}>
      <div
        className={styles.accordionTitle}
        onClick={toggleAccordion}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            toggleAccordion();
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


      <div
        ref={contentRef}
        className={styles.accordionContent}
        style={{
          height: typeof height === "number" ? `${height}px` : height,
          transition: "height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",
        }}
      >
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
            <img src={question.imageSrc} alt="Картинка с вопросом" />
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
      </div>
    </div>
  );
}

export default Accordion;
