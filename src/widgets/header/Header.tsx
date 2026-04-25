import styles from "./style.module.css";
import logoSvg from "./assets/logo.svg";
import { NAV_ITEMS } from "../../shared/config/navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <Link to={'/'} className={styles.logo}>
            <img src={logoSvg} alt="Логотип" />
            <p>Yeahub</p>
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.path} className={styles.navLink}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.auth}>
          <button className={styles.loginBtn}>Вход</button>
          <button className={styles.registerBtn}>Регистрация</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
