import { Outlet } from "react-router-dom";
import Header from "../../widgets/header/ui/header/Header";
import styles from './style.module.css'
import Footer from "../../widgets/footer/Footer";


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
			<Footer/>
    </div>
  );
}

export default App;
