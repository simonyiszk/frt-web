import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Image, Link } from 'rebass';
import RehypeReact from 'rehype-react';
import Blockquote from '../components/Blockquote';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';
import Subhead from '../components/Subhead';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
    blockquote: Blockquote,
    h1: Heading,
    h2: Subhead,
    img: Image,
    li: props => <Paragraph {...props} is="li" my={0} />,
    p: Paragraph,
  },
}).Compiler;

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Container>
        <Heading>{post.frontmatter.title}</Heading>
        {renderAst(post.htmlAst)}
      </Container>
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
      frontmatter {
        title
      }
      htmlAst
    }
  }
`;
