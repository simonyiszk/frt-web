import PropTypes from 'prop-types';
import React from 'react';
import { Blockquote as BlockquoteBase, Border } from 'rebass';

const Blockquote = ({ css, ...props }) => (
  <Border
    is={BlockquoteBase}
    border={0}
    borderLeft={4}
    borderColor="red"
    px={3}
    my={3}
    css={{
      fontStyle: 'italic',
      ...css,
    }}
    {...props}
  />
);

Blockquote.propTypes = {
  css: PropTypes.shape({}),
};

Blockquote.defaultProps = {
  css: null,
};

export default Blockquote;
