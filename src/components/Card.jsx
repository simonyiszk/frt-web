import React from 'react';
import { Card as CardBase } from 'rebass';

const Card = props => (
  <CardBase bg="red" borderRadius={2} boxShadow={0} p={0} {...props} />
);

export default Card;
