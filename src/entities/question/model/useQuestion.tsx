import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import type { Question } from "./type";
import useDebounce from "@/shared/lib/hooks/useDebounce";

const useQuestions = (
  searchValue: string,
  specializationFilter,
  skillsFilter,
) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const debouncedSearch = useDebounce(searchValue, 700);

  const setCurrentPage = useCallback(
    (page: number) => {
      setSearchParams({ page: page.toString() });
    },
    [setSearchParams],
  );

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const specializationsId = specializationFilter
          ? `&specializationId=${specializationFilter}`
          : "";
        const skillsId = skillsFilter ? `&skills=${skillsFilter}` : "";
        const res = await fetch(
          `https://api.yeatwork.ru/questions/public-questions?page=${currentPage}&limit=10&titleOrDescription=${debouncedSearch}${specializationsId}${skillsId}`,
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
  }, [currentPage, debouncedSearch, specializationFilter, skillsFilter]);

  return { questions, loading, error, currentPage, setCurrentPage, totalPages };
};

export default useQuestions;
