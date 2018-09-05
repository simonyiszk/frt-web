import { graphql, Link as GatsbyLink, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, Container, Flex } from 'rebass';
import List from './List';
import NavLink from './NavLink';

const Header = ({ brand, ...props }) => (
  <Box is="header" color="white" bg="black" {...props}>
    <Container
      is={Flex}
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
      my={1}
    >
      <NavLink is={GatsbyLink} to="/" px={0} css={{ opacity: 1 }}>
        {brand}
      </NavLink>

      <nav>
        <StaticQuery
          query={graphql`
            {
              allHeaderMenuItemsYaml {
                edges {
                  node {
                    hidden
                    title
                    href
                  }
                }
              }
            }
          `}
          render={data => (
            <List p={0} css={{ '> *': { display: 'inline-block' } }}>
              {data.allHeaderMenuItemsYaml.edges.map(
                ({ node }) =>
                  !node.hidden && (
                    <li>
                      <NavLink is={GatsbyLink} to={node.href}>
                        {node.title}
                      </NavLink>
                    </li>
                  ),
              )}
            </List>
          )}
        />
      </nav>
    </Container>
  </Box>
);

Header.propTypes = {
  brand: PropTypes.node.isRequired,
};

export default Header;
