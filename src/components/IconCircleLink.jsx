import PropTypes from 'prop-types';
import React from 'react';
import IconCircle from './IconCircle';
import NavLink from './NavLink';

const IconCircleLink = ({ href, ...props }) => (
  <NavLink href={href} fontSize="unset" p={0}>
    <IconCircle {...props} />
  </NavLink>
);

IconCircleLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default IconCircleLink;
