import { Accordion } from "@shared/ui/Accordion";
import { Pagination } from "@features/pagination";
import { QuestionError } from "@features/questionError";
import { useQuestions } from "@widgets/questionList";
import styles from "./style.module.css";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import { useContext } from "react";
import { SearchContext } from "@/features/search/model/SearchContext";

function QuestionList() {
  const { searchValue } = useContext(SearchContext);
  const { questions, loading, error, currentPage, totalPages } =
    useQuestions(searchValue);


  if (error) return <QuestionError error={error} />;

  return (
    <div className={styles.questionList}>
      <div className={styles.container}>
        <div className={styles.questionTitle}>
          <h1 className={styles.title}>Вопросы React, JavaScript</h1>
        </div>
        {loading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : questions.map((question) => (
              <Accordion key={question.id} question={question} />
            ))}
      </div>
      <div className={styles.pagination}>
        <Pagination currentPage={currentPage} pageCount={totalPages} />
      </div>
    </div>
  );
}

export default QuestionList;
