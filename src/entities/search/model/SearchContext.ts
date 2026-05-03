import { createContext, useContext } from "react";
import type {SearchContextType} from './type'


export const SearchContext = createContext<SearchContextType | null>(null);

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used within SearchProvider");
  }

  return context;
};
