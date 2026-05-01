import { createContext, useState } from "react";
import QuestionList from "../../../widgets/questionList/QuestionList";
import SideBar from "../../../widgets/sidebar/SideBar";
import styles from "./style.module.css";
import type { MyContext } from "../model/type";

export const SearchContext = createContext<MyContext | null>(null);

function MainContent() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className={styles.wrapper}>
        <QuestionList />
        <SideBar />
      </div>
    </SearchContext.Provider>
  );
}

export default MainContent;
