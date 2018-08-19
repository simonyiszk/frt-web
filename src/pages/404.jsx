import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'rebass';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>404</title>
    </Helmet>

    <Container>
      <Heading>Az oldal nem található</Heading>
      <Paragraph>A kért oldal nem érhető el.</Paragraph>
    </Container>
  </>
);

export default NotFoundPage;
