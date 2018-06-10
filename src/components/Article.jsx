import PropTypes from 'prop-types';
import React from 'react';
import styles from './Article.module.scss';

const Article = ({ children, className, ...props }) => (
  <article className={`${styles.root} ${className}`} {...props}>
    {children}
  </article>
);

Article.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Article.defaultProps = {
  className: '',
};

export default Article;
