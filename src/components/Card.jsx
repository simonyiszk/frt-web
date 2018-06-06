import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import styles from './Card.module.scss';

const Card = ({ media, children, className, ...props }) => (
  <div className={`${styles.root} ${className}`} {...props}>
    <div className={styles.media}>{media}</div>
    <Container fluid>{children}</Container>
  </div>
);

Card.propTypes = {
  media: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  media: undefined,
  className: '',
};

export default Card;
