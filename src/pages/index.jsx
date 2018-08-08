import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { BackgroundImage, Container, Link } from 'rebass';
import Card from '../components/Card';
import CardContent from '../components/CardContent';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';
import Subhead from '../components/Subhead';

const IndexPage = () => (
  <Layout>
    <Container>
      <Heading textAlign="center">Hírek</Heading>

      <Card>
        <BackgroundImage
          ratio={1}
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
        />

        <CardContent>
          <Subhead>Hello</Subhead>
          <Paragraph>
            Welcome to your new Gatsby site.
            <br />
            Now go build something great.
          </Paragraph>
          <Paragraph textAlign="right" css={{ fontStyle: 'italic' }}>
            2018. június 6.
          </Paragraph>
        </CardContent>
      </Card>

      <Paragraph>
        <Link is={GatsbyLink} to="/page-2/">
          Go to page 2
        </Link>
      </Paragraph>
    </Container>
  </Layout>
);

export default IndexPage;
