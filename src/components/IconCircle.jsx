import PropTypes from 'prop-types';
import React from 'react';
import { Box } from 'rebass';

const IconCircle = ({ icon: Icon, title, ...props }) => (
  <Box
    {...props}
    css={{
      display: 'inline-block',
      width: '2em',
      padding: '0.5em',
      borderRadius: '50%',
      lineHeight: 0,
    }}
  >
    <Icon size="1em" title={title} />
  </Box>
);

IconCircle.propTypes = {
  icon: PropTypes.func.isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string,
};

IconCircle.defaultProps = {
  title: null,
  color: 'black',
  bg: 'white',
};

export default IconCircle;
