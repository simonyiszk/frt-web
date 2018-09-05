import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, Container } from 'rebass';
import { FacebookF, Instagram, Youtube } from 'styled-icons/fa-brands';
import { Envelope } from 'styled-icons/fa-solid';
import IconCircleLink from './IconCircleLink';

const Footer = ({ children, ...props }) => (
  <Box is="footer" py={3} color="white" bg="black" {...props}>
    <Container>
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                siteFacebookURL
                siteInstagramURL
                siteYouTubeURL
                siteEmail
              }
            }
          }
        `}
        render={data => (
          <Box
            fontSize={3}
            css={{
              '> *:not(:first-child)': {
                marginLeft: '1em',
              },
            }}
          >
            <IconCircleLink
              icon={FacebookF}
              href={data.site.siteMetadata.siteFacebookURL}
              title="Facebook"
            />
            <IconCircleLink
              icon={Instagram}
              href={data.site.siteMetadata.siteInstagramURL}
              title="Instagram"
            />
            <IconCircleLink
              icon={Youtube}
              href={data.site.siteMetadata.siteYouTubeURL}
              title="YouTube"
            />
            <IconCircleLink
              icon={Envelope}
              href={`mailto:${data.site.siteMetadata.siteEmail}`}
              title="E-mail"
            />
          </Box>
        )}
      />
    </Container>
  </Box>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
