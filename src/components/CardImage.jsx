import PropTypes from 'prop-types';
import React from 'react';
import styles from './CardImage.module.scss';

const CardImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`${styles.root} ${className}`} />
);

CardImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

CardImage.defaultProps = {
  src: '',
  alt: '',
  className: '',
};

export default CardImage;
