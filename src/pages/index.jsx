import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Container, Link } from 'rebass';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';

const IndexPage = () => (
  <Layout>
    <Container>
      <Heading>Hi people</Heading>
      <Paragraph>
        Welcome to your new Gatsby site.
        <br />
        Now go build something great.
      </Paragraph>
      <Paragraph>
        <Link is={GatsbyLink} to="/page-2/">
          Go to page 2
        </Link>
      </Paragraph>
    </Container>
  </Layout>
);

export default IndexPage;
