import { createContext } from "react";

export interface SearchContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const SearchContext = createContext<SearchContextType | null>(null);
