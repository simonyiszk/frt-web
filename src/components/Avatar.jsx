import PropTypes from 'prop-types';
import React from 'react';
import styles from './Avatar.module.scss';

const Avatar = ({ src, alt, className, ...props }) => (
  <img
    src={src}
    alt={alt}
    className={`${className} ${styles.root}`}
    {...props}
  />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  alt: '',
  className: '',
};

export default Avatar;
