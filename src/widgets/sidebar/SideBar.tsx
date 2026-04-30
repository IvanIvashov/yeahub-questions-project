import Section from "../../entities/specialization/ui/Section";
import Search from "../../features/search/Search";
import styles from "./style.module.css";


function SideBar() {
  return (
    <div className={styles.sideBarContent}>
      <div className={styles.wrapper}>
       <Search/>
			 <Section/>
      </div>
    </div>
  );
}

export default SideBar;
