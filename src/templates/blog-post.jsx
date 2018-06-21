import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import styles from './blog-post.module.scss';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Container>
        <article>
          <h1 className={styles.title}>{post.frontmatter.title}</h1>
          <p>
            <time dateTime={post.frontmatter.date} className={styles.date}>
              {post.frontmatter.dateString}
            </time>
          </p>

          <img
            src={post.frontmatter.image}
            alt={post.frontmatter.imageDescription}
            className={styles.coverImage}
          />

          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </Container>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        dateString: date(formatString: "LL", locale: "hu")
        image
        imageDescription
      }
    }
  }
`;
