import styles from './style.module.css'
import figma from './assets/Figma.svg'
import telegram from './assets/Telegram.svg'
import tiktok from './assets/tiktok.svg'
import github from './assets/Github.svg'
import youtube from './assets/Youtube.svg'



function Footer() {
	return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <h1>Yeahub</h1>
        <div className={styles.callToAction}>
          Выбери, каким будет IT завтра, вместе с нами
        </div>
        <div className={styles.desc}>
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </div>
        <hr />
        <div className={styles.lowerFooter}>
          <div className={styles.copyright}>
            <p>© 2024 YeaHub</p>
            <a href="#!" target="_blank">
              Документы
            </a>
          </div>
          <div className={styles.socials}>
            <p>Ищите нас и в других соцсетях @yeahub_it</p>
            <div className={styles.links}>
              <a href="#!" target="_blank">
                <img src={figma} alt="Иконка Фигма" />
              </a>
              <a href="#!" target="_blank">
                <img src={telegram} alt="Иконка Телеграмм" />
              </a>
              <a href="#!" target="_blank">
                <img src={youtube} alt="Иконка Ютуб" />
              </a>
              <a href="#!" target="_blank">
                <img src={tiktok} alt="Иконка ТикТок" />
              </a>
              <a href="#!" target="_blank">
                <img src={github} alt="Иконка Гитхаб" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
