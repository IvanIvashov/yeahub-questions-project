import { useNavigate } from 'react-router-dom';
import styles from './style.module.css'

function Button() {
	const navigate = useNavigate()
	return (
    <>
      <button className={styles.prevBtn} onClick={() => navigate(-1)}>
        Вернуться назад
      </button>
    </>
  );
}

export default Button
