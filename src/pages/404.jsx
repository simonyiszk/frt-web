import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'rebass';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Text from '../components/Text';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404</title>
    </Helmet>

    <Container>
      <Heading>Az oldal nem található</Heading>
      <Text>A kért oldal nem érhető el.</Text>
    </Container>
  </Layout>
);

export default NotFoundPage;
