import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Container, Link } from 'rebass';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Text from '../components/Text';

const IndexPage = () => (
  <Layout>
    <Container>
      <Heading>Hi people</Heading>
      <Text>
        Welcome to your new Gatsby site.
        <br />
        Now go build something great.
      </Text>
      <Text>
        <Link is={GatsbyLink} to="/page-2/">
          Go to page 2
        </Link>
      </Text>
    </Container>
  </Layout>
);

export default IndexPage;
