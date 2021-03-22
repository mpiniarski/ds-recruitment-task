import styles from "./header.module.scss"

const Header = () =>
  <header className={styles.header}>
      <img src="images/logo.svg" alt="logo" className={styles.logo}/>
      <nav className={styles.nav}>
        <a className={styles.link}>User form</a>
        <a className={styles.link}>User profile</a>
        <a className={styles.link}>User profile</a>
        <a className={styles.link}>User profile</a>
        <a className={styles.link}>User profile</a>
        <a className={styles.link}>User profile</a>
      </nav>
  </header>


export default Header