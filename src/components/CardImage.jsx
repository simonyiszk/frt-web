import PropTypes from 'prop-types';
import React from 'react';
import styles from './CardImage.module.scss';

const CardImage = ({ src, alt }) => (
  <img src={src} alt={alt} className={styles.root} />
);

CardImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

CardImage.defaultProps = {
  src: '',
  alt: '',
};

export default CardImage;
