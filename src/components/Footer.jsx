import PropTypes from 'prop-types';
import React from 'react';
import { Box, Container } from 'rebass';
import { FacebookF, Instagram, Youtube } from 'styled-icons/fa-brands';
import { Envelope } from 'styled-icons/fa-solid';
import IconCircle from './IconCircle';

const Footer = ({ children, ...props }) => (
  <Box is="footer" py={3} color="white" bg="black" {...props}>
    <Container>
      <Box fontSize={3}>
        <IconCircle is={FacebookF} title="Facebook" />
        <IconCircle is={Instagram} title="Instagram" />
        <IconCircle is={Youtube} title="YouTube" />
        <IconCircle is={Envelope} title="E-mail" />
      </Box>
    </Container>
  </Box>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
