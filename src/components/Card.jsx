import PropTypes from 'prop-types';
import React from 'react';
import styles from './Card.module.scss';

const Card = ({ children, gradient, className, ...props }) => (
  <div
    className={`${styles.root} ${
      gradient ? styles.rootGradient : ''
    } ${className}`}
    {...props}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  gradient: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  gradient: false,
  className: '',
};

export default Card;
