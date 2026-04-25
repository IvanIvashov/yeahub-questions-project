import styles from "./style.module.css";
import logoSvg from "./assets/logo.svg";
import { NAV_ITEMS } from "../../shared/config/navigation";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <a href="/" className={styles.logo}>
            <img src={logoSvg} alt="Логотип" />
            <p>Yeahub</p>
          </a>

          <nav className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.path} className={styles.navLink}>
										<a href={item.path}>{item.title}</a>
							</li>
            ))}
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
