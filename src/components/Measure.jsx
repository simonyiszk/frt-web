import PropTypes from 'prop-types';
import React from 'react';
import styles from './Measure.module.scss';

const Measure = ({ children, className, ...props }) => (
  <div className={`${styles.root} ${className}`} {...props}>
    {children}
  </div>
);

Measure.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Measure.defaultProps = {
  className: '',
};

export default Measure;
