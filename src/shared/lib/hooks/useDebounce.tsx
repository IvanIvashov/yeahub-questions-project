import { useEffect, useState } from "react";

function useDebounce(value, delay: number) {
  const [valueDebounce, setValueDebounce] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValueDebounce(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return valueDebounce;
}

export default useDebounce;
