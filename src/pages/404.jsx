import React from 'react';
import Article from '../components/Article';
import Container from '../components/Container';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Article>
        <h1>Az oldal nem található</h1>
        <p>A kért oldal nem érhető el.</p>
      </Article>
    </Container>
  </Layout>
);

export default NotFoundPage;
