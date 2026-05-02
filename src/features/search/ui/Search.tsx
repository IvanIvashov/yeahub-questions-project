import { useContext } from "react";
import { SearchContext } from "../../../pages/MainPage/ui/MainContent";
import styles from "./style.module.css";
import search from "../assets/search.svg";
import close from "../assets/close.svg";

function Search() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Search must be used within SearchContext.Provider");
  }

  const { searchValue, setSearchValue } = context;

  return (
    <div className={styles.search}>
      <label htmlFor="search">
        <img className={styles.icon} src={search} alt="Иконка поиска" />
      </label>
      <input
        name="search"
        id="search"
        value={searchValue}
        className={styles.input}
        placeholder="Введите запрос..."
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {searchValue && (
        <img
          className={styles.closeBtn}
          src={close}
          alt="Крестик для инпута"
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  );
}

export default Search;
