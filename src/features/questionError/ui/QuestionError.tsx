import { Button } from "@/shared";
import type { QuestionErrorProps } from "../model/type";
import styles from "./style.module.css";

function QuestionError({ error }: QuestionErrorProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.titleError}>УПС!</h1>
        <p className={styles.desc}>Что-то пошло не так. Ошибка: {error}</p>
        <Button />
      </div>
    </div>
  );
}

export default QuestionError;
