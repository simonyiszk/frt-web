import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Article from '../components/Article';
import Card from '../components/Card';
import Container from '../components/Container';
import Layout from '../components/Layout';
import styles from './news.module.scss';

const NewsPage = ({ data }) => (
  <Layout>
    <Container>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Article className={styles.newsItem}>
          <Link to={node.fields.slug} className={styles.newsItemLink}>
            <Card
              imageSrc={node.frontmatter.image}
              imageDescription={node.frontmatter.imageDescription}
            >
              <h1>{node.frontmatter.title}</h1>
              <p>{node.frontmatter.abstract || node.excerpt}</p>

              <p className={styles.date}>
                <time dateTime={node.frontmatter.date}>
                  {node.frontmatter.dateString}
                </time>
              </p>
            </Card>
          </Link>
        </Article>
      ))}
    </Container>
  </Layout>
);

NewsPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default NewsPage;

export const query = graphql`
  query NewsPageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/news/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            dateString: date(formatString: "LL", locale: "hu")
            image
            imageDescription
            abstract
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
