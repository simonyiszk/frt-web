import PropTypes from 'prop-types';
import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ children }) => (
  <h1 className={styles.root}>{children}</h1>
);

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;
