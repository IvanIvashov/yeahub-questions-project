import Section from "../../entities/section/ui/Section";
import Search from "../../features/search/ui/Search";
import styles from "./style.module.css";

function SideBar() {
  return (
    <aside className={styles.sideBarContent}>
      <div className={styles.wrapper}>
        <Search />
        <Section />
      </div>
    </aside>
  );
}

export default SideBar;
