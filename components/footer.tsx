import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faInstagram, faLinkedin, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <section className={styles.socialMedia}>
      <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
      <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
      <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
      <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
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
    <section className={styles.text1}>
      <h3>Dear user,</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, tristique et faucibus et, iaculis ut velit. Ut pretium purus tincidunt,
        porta massa in, sodales lacus. Sed ac feugiat purus, sit amet molestie enim. Donec eu turpis quis velit ullamcorper finibus. Pellentesque at
        velit nec magna tristique feugiat nec sit amet risus. Maecenas vel sapien ac ipsum commodo rutrum maximus et justo. Donec sapien neque,
        elementum nec molestie quis, gravida ut turpis.
        {' '}
      </p>
    </section>
    <section className={styles.text2}>
      <h3>Our mission:</h3>
      <p>
        Mauris pulvinar quam dui. Aliquam ac vehicula nibh. Donec urna lacus, ullamcorper interdum urna ac, luctus condimentum nibh. Duis sodales
        eget lorem at cursus. Phasellus lacinia tellus molestie lobortis imperdiet. Suspendisse eu justo sit amet enim posuere finibus sodales vitae
        magna. Nam faucibus est at metus suscipit consectetur. Morbi dictum luctus scelerisque. Duis in auctor tellus. Morbi mollis massa lacus, non
        cursus leo ultricies a.
      </p>
    </section>
    <section className={styles.copyright}>
      <span>
        Developed by © Marcin Piniarski. Icons made by
        <a href="https://www.flaticon.com/authors/dighital" title="Dighital">Dighital</a>
        {' '}
        from
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
        >
          www.flaticon.com
        </a>
      </span>
    </section>
  </footer>
);

export default Footer;
