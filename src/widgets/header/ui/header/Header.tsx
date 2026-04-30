import styles from "./style.module.css";
import logoSvg from "../../assets/logo.svg";
import { NAV_ITEMS } from "../../config/navigationData";
import { NavLink, Link } from "react-router-dom";
import AuthButtons from "../authButtons/AuthButtons";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <Link to={"/"} className={styles.logo}>
            <img src={logoSvg} alt="Логотип" />
            <p>Yeahub</p>
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.path} className={styles.navLink}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.navLink} ${styles.active}`
                        : styles.navLink
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
       <AuthButtons/>
      </div>
    </header>
  );
}

export default Header;
