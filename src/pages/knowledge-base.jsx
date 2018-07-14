import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';

const KnowledgeBasePage = ({ data }) => (
  <Layout>
    <Container>
      <article
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />
    </Container>
  </Layout>
);

KnowledgeBasePage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default KnowledgeBasePage;

export const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/knowledge-base.md$/" }) {
      html
    }
  }
`;
