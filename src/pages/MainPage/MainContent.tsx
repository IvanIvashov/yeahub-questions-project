import QuestionList from "../../widgets/questionList/QuestionList";
import SideBar from "../../widgets/sidebar/SideBar";
import styles from "./style.module.css";

function MainContent() {
  return (
    <div className={styles.wrapper}>
      <QuestionList />
      <SideBar />
    </div>
  );
}

export default MainContent;
