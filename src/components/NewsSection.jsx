import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import Card from './Card';
import CardImage from './CardImage';
import Container from './Container';
import SectionTitle from './SectionTitle';
import styles from './NewsSection.module.scss';

const NewsSection = () => (
  <React.Fragment>
    <SectionTitle>Hírek</SectionTitle>

    <div className={styles.newsContainer}>
      <StaticQuery
        query={graphql`
          {
            allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/news/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
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
        `}
        render={staticData =>
          staticData.allMarkdownRemark.edges.map(({ node }) => (
            <article key={node.fields.slug} className={styles.newsItem}>
              <Link to={node.fields.slug} className={styles.newsItemLink}>
                <Card className={styles.newsItemCard}>
                  {node.frontmatter.image != null ? (
                    <CardImage
                      src={node.frontmatter.image}
                      alt={node.frontmatter.imageDescription}
                      className={styles.newsItemCardImage}
                    />
                  ) : (
                    <div className={styles.newsItemCardImage} />
                  )}

                  <Container fluid>
                    <h2>{node.frontmatter.title}</h2>
                    <p>{node.frontmatter.abstract || node.excerpt}</p>

                    <p className={styles.date}>
                      <time dateTime={node.frontmatter.date}>
                        {node.frontmatter.dateString}
                      </time>
                    </p>
                  </Container>
                </Card>
              </Link>
            </article>
          ))
        }
      />
    </div>
  </React.Fragment>
);

export default NewsSection;
