import Button from "../../../shared/ui/ButtonWithError/Button";
import styles from "./style.module.css";
import type {QuestionErrorProps} from '../model/type'

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
