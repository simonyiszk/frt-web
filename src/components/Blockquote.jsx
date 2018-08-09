import React from 'react';
import { Blockquote, Border } from 'rebass';

export default props => (
  <Border
    is={Blockquote}
    border={0}
    borderLeft={4}
    borderColor="red"
    px={3}
    my={3}
    {...props}
  />
);
