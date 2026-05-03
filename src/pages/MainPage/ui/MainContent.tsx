import { useState } from "react";
import { QuestionList } from "@/widgets/questionList";
import { SearchContext } from "@/entities/search/model/SearchContext";

import SideBar from "@widgets/sidebar";
import styles from "./style.module.css";

function MainContent() {
  const [searchValue, setSearchValue] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState<
    number | null
  >(null);
  const [skillsFilter, setSkillsFilter] = useState<number | null>(null);
	const [rateFilter, setRateFilter] = useState(null);
const [complexityFilter, setComplexityFilter] = useState(null);


  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        specializationFilter,
        setSpecializationFilter,
        skillsFilter,
        setSkillsFilter,
        rateFilter,
        setRateFilter,
        complexityFilter,
        setComplexityFilter,
      }}
    >
      <div className={styles.wrapper}>
        <QuestionList />
        <SideBar />
      </div>
    </SearchContext.Provider>
  );
}

export default MainContent;
