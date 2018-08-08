import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'rebass';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404</title>
    </Helmet>

    <Container>
      <Heading>Az oldal nem található</Heading>
      <Paragraph>A kért oldal nem érhető el.</Paragraph>
    </Container>
  </Layout>
);

export default NotFoundPage;
