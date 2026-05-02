import styles from "./style.module.css";
import errorPage from "../assets/errorPage.svg";
import Button from "../../../shared/ui/Button/Button";

function ErrorPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          className={styles.imgError}
          src={errorPage}
          alt="Страница не найдена"
        />
        <p className={styles.desc}>Страница не найдена</p>
        <Button />
      </div>
    </div>
  );
}

export default ErrorPage;
