import PropTypes from 'prop-types';
import React from 'react';
import styles from './Card.module.scss';

const Card = ({
  children,
  imageSrc,
  imageDescription,
  className,
  ...props
}) => (
  <div className={`${styles.root} ${className}`} {...props}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  imageSrc: PropTypes.string,
  imageDescription: PropTypes.string,
  className: PropTypes.string,
};

Card.defaultProps = {
  imageSrc: '',
  imageDescription: '',
  className: '',
};

export default Card;
