import styles from "./header.module.scss"
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRef, useState} from "react";
import useEventListener from "utils/useEventListener";

const Header = () => {
  const [navVisible, setNavVisible] = useState<boolean>(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEventListener("click", (event) => {
    if (navVisible && !(navRef.current).contains(event.target as Node)) {
      setNavVisible(false)
    }
  })

  return <header className={styles.header}>
    <img src="images/logo.svg" alt="logo" className={styles.logo}/>
    <nav className={`${styles.nav} ${navVisible ? styles.visible : ""}`} ref={navRef}>
      <a className={styles.link}>User form</a>
      <a className={styles.link}>User profile</a>
      <a className={styles.link}>Other</a>
      <a className={styles.link}>Menu</a>
      <a className={styles.link}>Items</a>
    </nav>
    <FontAwesomeIcon className={styles.mobileMenuButton} icon={faBars} onClick={() => setNavVisible(true)}/>
  </header>

}

export default Header