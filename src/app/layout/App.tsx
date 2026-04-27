import { Outlet } from "react-router-dom";
import Header from "../../widgets/header/ui/header/Header";
import styles from './style.module.css'
function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
