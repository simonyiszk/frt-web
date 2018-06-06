import PropTypes from 'prop-types';
import React from 'react';
import styles from './Container.module.scss';

const Container = ({ children, fluid, className, ...props }) => (
  <div
    className={`${styles.root} ${!fluid && styles.nonFluid} ${className}`}
    {...props}
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  className: PropTypes.string,
};

Container.defaultProps = {
  fluid: false,
  className: '',
};

export default Container;
