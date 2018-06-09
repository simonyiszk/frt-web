import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import CircledFontAwesomeIcon from './CircledFontAwesomeIcon';
import Container from './Container';
import styles from './Footer.module.scss';

const Footer = ({ ...props }) => (
  <footer {...props}>
    <Container>
      <StaticQuery
        query={graphql`
          query FooterQuery {
            site {
              siteMetadata {
                siteFacebookURL
                siteInstagramURL
                siteYouTubeURL
                siteEmailURL
              }
            }
          }
        `}
        render={staticData => (
          <div className={styles.iconsContainer}>
            <a href={staticData.site.siteMetadata.siteFacebookURL}>
              <CircledFontAwesomeIcon
                icon={faFacebookF}
                className={styles.icon}
              />
            </a>

            <a href={staticData.site.siteMetadata.siteInstagramURL}>
              <CircledFontAwesomeIcon
                icon={faInstagram}
                className={styles.icon}
              />
            </a>

            <a href={staticData.site.siteMetadata.siteYouTubeURL}>
              <CircledFontAwesomeIcon
                icon={faYoutube}
                className={styles.icon}
              />
            </a>

            <a href={staticData.site.siteMetadata.siteEmailURL}>
              <CircledFontAwesomeIcon
                icon={faEnvelope}
                className={styles.icon}
              />
            </a>
          </div>
        )}
      />
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
