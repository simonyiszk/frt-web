import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Container, Link } from 'rebass';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Text from '../components/Text';

const SecondPage = () => (
  <Layout>
    <Container>
      <Heading>Hi from the second page</Heading>
      <Text>Welcome to page 2</Text>
      <Text>
        <Link is={GatsbyLink} to="/">
          Go back to the homepage
        </Link>
      </Text>
    </Container>
  </Layout>
);

export default SecondPage;
