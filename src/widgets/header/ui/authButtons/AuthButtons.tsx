import styles from './style.module.css'


function AuthButtons() {
	return (
    <div className={styles.auth}>
      <button className={styles.loginBtn}>Вход</button>
      <button className={styles.registerBtn}>Регистрация</button>
    </div>
  );
}

export default AuthButtons
