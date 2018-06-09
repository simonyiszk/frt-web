import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Footer = () => (
  <footer>
    <FontAwesomeIcon icon={faFacebookF} transform="shrink-8" mask={faCircle} />
    <FontAwesomeIcon icon={faInstagram} transform="shrink-8" mask={faCircle} />
    <FontAwesomeIcon icon={faYoutube} transform="shrink-8" mask={faCircle} />
    <FontAwesomeIcon icon={faEnvelope} transform="shrink-8" mask={faCircle} />
  </footer>
);

export default Footer;
