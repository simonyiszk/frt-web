import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { BackgroundImage, Container, Image, Link } from 'rebass';
import RehypeReact from 'rehype-react';
import Blockquote from '../components/Blockquote';
import Heading from '../components/Heading';
import ListItem from '../components/ListItem';
import Measure from '../components/Measure';
import Paragraph from '../components/Paragraph';
import Subhead from '../components/Subhead';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
    blockquote: props => <Measure {...props} is={Blockquote} />,
    h1: props => <Measure {...props} is={Heading} />,
    h2: props => <Measure {...props} is={Subhead} />,
    img: props => <Image mx="auto" {...props} />,
    li: props => <Measure {...props} is={ListItem} />,
    p: props => <Measure {...props} is={Paragraph} />,
  },
}).Compiler;

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Container>
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>

      {post.frontmatter.image != null ? (
        <>
          <Heading>{post.frontmatter.title}</Heading>
          <BackgroundImage src={post.frontmatter.image} ratio={9 / 21} mb={3} />
        </>
      ) : (
        <Measure is={Heading}>{post.frontmatter.title}</Measure>
      )}

      {renderAst(post.htmlAst)}
    </Container>
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
        image
      }
      htmlAst
    }
  }
`;
