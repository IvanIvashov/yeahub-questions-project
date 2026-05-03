import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import type { Question } from "../type";

const useQuestions = (searchValue) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const setCurrentPage = useCallback(
    (page: number) => {
      setSearchParams({ page: page.toString() });
    },
    [setSearchParams],
  );
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.yeatwork.ru/questions/public-questions?page=${currentPage}&limit=10&title=${searchValue}`,
        );
        if (!res.ok) throw new Error(`HTTP: ${res.status}`);

        const response = await res.json();

        setQuestions(response.data);

        if (response.total) {
          setTotalPages(Math.ceil(response.total / 10));
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          console.log(err);
        } else {
          setError("Произошла неизвестная ошибка");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [currentPage, searchValue]);

  return { questions, loading, error, currentPage, setCurrentPage, totalPages };
};

export default useQuestions;
