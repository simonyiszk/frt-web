import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import CircledFontAwesomeIcon from './CircledFontAwesomeIcon';
import Container from './Container';
import styles from './Footer.module.scss';

const Footer = ({ ...props }) => (
  <footer {...props}>
    <Container>
      <div className={styles.iconsContainer}>
        <a href="#todo">
          <CircledFontAwesomeIcon icon={faFacebookF} className={styles.icon} />
        </a>
        <a href="#todo">
          <CircledFontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
        <a href="#todo">
          <CircledFontAwesomeIcon icon={faYoutube} className={styles.icon} />
        </a>
        <a href="#todo">
          <CircledFontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        </a>
      </div>
    </Container>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
