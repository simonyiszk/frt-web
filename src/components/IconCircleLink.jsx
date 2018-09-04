import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'rebass';
import IconCircle from './IconCircle';

const IconCircleLink = ({ href, ...props }) => (
  <NavLink href={href} fontSize="unset" p={0}>
    <IconCircle {...props} />
  </NavLink>
);

IconCircleLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default IconCircleLink;
