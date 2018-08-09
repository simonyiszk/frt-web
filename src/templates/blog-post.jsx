import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default BlogPostTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
