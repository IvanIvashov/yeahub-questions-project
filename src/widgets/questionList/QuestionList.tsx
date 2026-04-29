import Accordion from "../../shared/ui/Accordion/Accordion";
import styles from "./style.module.css";

function QuestionList() {
  return (
    <div className={styles.questionList}>
      <div className={styles.questionTitle}>
        <h1 className={styles.title}>Вопросы React, JavaScript</h1>
      </div>
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
    </div>
  );
}

export default QuestionList;
