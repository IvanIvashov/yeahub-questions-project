import { useEffect, useState } from "react";
import type { Question } from "../type";

export const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.yeatwork.ru/questions/public-questions`,
        );
        if (!res.ok) throw new Error(`HTTP: ${res.status}`);
        const { data } = await res.json();
        setQuestions(data);
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
  }, []);

  return { questions, loading, error };
};
