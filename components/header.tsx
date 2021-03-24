import styles from "./header.module.scss"
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ReactNode, useRef, useState} from "react";
import useEventListener from "utils/useEventListener";
import NextLink from 'next/link'
import {useRouter} from "next/router";

const Header = () => {
  const [navVisible, setNavVisible] = useState<boolean>(false)
  const navRef = useRef<HTMLDivElement>(null)
  let router = useRouter();

  useEventListener("click", (event) => {
    if (navVisible && !(navRef.current).contains(event.target as Node)) {
      setNavVisible(false)
    }
  })

  const Link = ({href, children}:{href:string, children: ReactNode}) =>
    <NextLink href={href}>
      <a className={`${styles.link} ${router.pathname === href ? styles.active : ""}`}>{children}</a>
    </NextLink>

  return <header className={styles.header}>
    <img src="images/logo.svg" alt="logo" className={styles.logo}/>
    <nav className={`${styles.nav} ${navVisible ? styles.visible : ""}`} ref={navRef}>
      <Link href="/profile">Profile info</Link>
      <Link href="/profile-form">Profile form</Link>
      <Link href="#">Other</Link>
      <Link href="#">Menu</Link>
      <Link href="#">Options</Link>
    </nav>
    <FontAwesomeIcon className={styles.mobileMenuButton} icon={faBars} onClick={() => setNavVisible(true)}/>
  </header>

}

export default Header