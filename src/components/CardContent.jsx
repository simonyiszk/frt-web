import PropTypes from 'prop-types';
import React from 'react';
import { Box } from 'rebass';

const CardContent = ({ children, ...props }) => (
  <Box px={3} py={2} {...props}>
    {children}
  </Box>
);

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardContent;
