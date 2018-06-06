import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import styles from './Card.module.scss';

const Card = ({
  children,
  imageSrc,
  imageDescription,
  className,
  ...props
}) => (
  <div className={`${styles.root} ${className}`} {...props}>
    <div
      alt={imageDescription}
      className={styles.media}
      style={{ backgroundImage: `url(${imageSrc})` }}
    />
    <Container fluid>{children}</Container>
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
