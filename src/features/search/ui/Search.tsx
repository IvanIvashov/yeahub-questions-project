import { useContext } from "react";
import { SearchContext } from "../../../entities/search/model/SearchContext";

import styles from "./style.module.css";
import search from "../assets/search.svg";
import close from "../assets/close.svg";

function Search() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Ошибка");
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
        <button
          className={styles.closeBtn}
          aria-label="Очистить поиск"
          onClick={() => setSearchValue("")}
        >
          <img src={close} alt="Крестик для инпута" />
        </button>
      )}
    </div>
  );
}

export default Search;
