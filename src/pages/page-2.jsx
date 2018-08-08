import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Container, Link } from 'rebass';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';

const SecondPage = () => (
  <Layout>
    <Container>
      <Heading>Hi from the second page</Heading>
      <Paragraph>Welcome to page 2</Paragraph>
      <Paragraph>
        <Link is={GatsbyLink} to="/">
          Go back to the homepage
        </Link>
      </Paragraph>
    </Container>
  </Layout>
);

export default SecondPage;
