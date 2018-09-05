import PropTypes from 'prop-types';
import React from 'react';
import { NavLink as NavLinkBase } from 'rebass';

const NavLink = ({ css, ...props }) => (
  <NavLinkBase
    fontSize="unset"
    fontWeight="unset"
    css={{
      opacity: 0.8,
      ':hover': { opacity: 1 },
      ...css,
    }}
    {...props}
  />
);

NavLink.propTypes = {
  css: PropTypes.shape({}),
};

NavLink.defaultProps = {
  css: null,
};

export default NavLink;
