import styles from "./style.module.css";
import search from "./assets/search.svg";

function Search() {
  return (
    <div className={styles.search}>
      <label htmlFor="search">
        <img className={styles.icon} src={search} alt="Иконка поиска" />
      </label>
      <input
        name="search"
        id="search"
        className={styles.input}
        placeholder="Введите запрос..."
      />
    </div>
  );
}

export default Search;
