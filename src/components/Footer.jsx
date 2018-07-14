import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import schdesignLogoSrc from '../assets/schdesign-logo.svg';
import CircledFontAwesomeIcon from './CircledFontAwesomeIcon';
import Container from './Container';
import styles from './Footer.module.scss';

const Footer = ({ ...props }) => (
  <footer {...props}>
    <Container className={styles.contentContainer}>
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                siteFacebookURL
                siteInstagramURL
                siteYouTubeURL
                siteEmail
              }
            }
          }
        `}
        render={staticData => (
          <div className={styles.iconsContainer}>
            <a
              href={staticData.site.siteMetadata.siteFacebookURL}
              className={styles.iconLink}
              aria-label="Facebook"
            >
              <CircledFontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href={staticData.site.siteMetadata.siteInstagramURL}
              className={styles.iconLink}
              aria-label="Instagram"
            >
              <CircledFontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href={staticData.site.siteMetadata.siteYouTubeURL}
              className={styles.iconLink}
              aria-label="YouTube"
            >
              <CircledFontAwesomeIcon icon={faYoutube} />
            </a>

            <a
              href={`mailto:${staticData.site.siteMetadata.siteEmail}`}
              className={styles.iconLink}
              aria-label="E-mail"
            >
              <CircledFontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        )}
      />

      <a href="http://schdesign.hu" className={styles.designerLink}>
        Designed by{' '}
        <img
          src={schdesignLogoSrc}
          alt="schdesign"
          className={styles.designerLogo}
        />
      </a>
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
