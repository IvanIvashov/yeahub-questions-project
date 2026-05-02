import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import errorPage from "../assets/errorPage.svg";

function ErrorPage() {
	const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          className={styles.imgError}
          src={errorPage}
          alt="Страница не найдена"
        />
        <p className={styles.desc}>Страница не найдена</p>
        <button className={styles.prevBtn} onClick={() => navigate(-1)}>
          Вернуться назад
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
