import styles from "./footer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () =>
  <footer className={styles.footer}>
    <section className={styles.socialMedia}>
      <FontAwesomeIcon className={styles.icon} icon={faTwitter}/>
      <FontAwesomeIcon className={styles.icon} icon={faFacebook}/>
      <FontAwesomeIcon className={styles.icon} icon={faInstagram}/>
      <FontAwesomeIcon className={styles.icon} icon={faLinkedin}/>
    </section>
    <section className={styles.links}>
      <h3>Links:</h3>
      <a href="#">About us</a>
      <a href="#">Contact info</a>
      <a href="#">Privacy policy</a>
      <a href="#">Some</a>
      <a href="#">Other</a>
      <a href="#">Links</a>
    </section>
    <section className={styles.text}>
      <h3>Dear user</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, tristique et faucibus et, iaculis ut velit. Ut pretium purus tincidunt, porta massa in, sodales lacus. Sed ac feugiat purus, sit amet molestie enim. Donec eu turpis quis velit ullamcorper finibus. Pellentesque at velit nec magna tristique feugiat nec sit amet risus. Maecenas vel sapien ac ipsum commodo rutrum maximus et justo. Donec sapien neque, elementum nec molestie quis, gravida ut turpis. </p>
    </section>
    <section className={styles.copyright}>
      Developed by © Marcin Piniarski.
      <div>Icons made by <a href="https://www.flaticon.com/authors/dighital" title="Dighital">Dighital</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </section>
  </footer>

export default Footer
