import { useState } from "react";
import { QuestionList } from "@/widgets/questionList";

import SideBar from "@widgets/sidebar";
import styles from "./style.module.css";
import { SearchContext } from "@/features/search/model/SearchContext";

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
