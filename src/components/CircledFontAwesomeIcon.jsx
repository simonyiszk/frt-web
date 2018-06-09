import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CircledFontAwesomeIcon = ({ ...props }) => (
  <FontAwesomeIcon {...props} transform={{ size: 8 }} mask={faCircle} />
);

export default CircledFontAwesomeIcon;
