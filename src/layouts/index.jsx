import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Box, Flex, Image, Provider as RebassProvider, Text } from 'rebass';
import { injectGlobal } from 'styled-components';
import FRTLogoURL from '../assets/frt-logo.svg';
import Footer from '../components/Footer';
import Header from '../components/Header';

injectGlobal`
  body {
    margin: 0;
    text-size-adjust: 100%;
  }
`;

const IndexLayout = ({ children }) => (
  <RebassProvider
    is={Flex}
    theme={{
      fonts: {
        display: 'Rajdhani, sans-serif',
        sans: 'Montserrat, sans-serif',
      },
      lineHeights: [1, 1.25, 1.5, 1.75, 2],
      colors: {
        gray: '#212121',
        red: '#c8102e',
      },
    }}
    flexDirection="column"
    css={{ minHeight: '100vh' }}
  >
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={data => (
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat|Rajdhani"
            rel="stylesheet"
          />
        </Helmet>
      )}
    />

    <Header
      brand={
        <Image
          src={FRTLogoURL}
          alt="Kezdőlap"
          css={{ height: '3em !important' }}
        />
      }
    />

    <Box is="main" flex={1} color="white" bg="gray">
      {children}
    </Box>

    <Footer>
      <Text align="center">Sticky footer</Text>
    </Footer>
  </RebassProvider>
);

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexLayout;
