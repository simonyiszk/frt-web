import { Link, StaticQuery } from 'gatsby';
import React from 'react';
import Card from '../components/Card';
import styles from './NewsSection.module.scss';

const NewsSection = () => (
  <React.Fragment>
    <h1>Hírek</h1>

    <StaticQuery
      query={graphql`
        query NewsSectionQuery {
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
              <Card
                imageSrc={node.frontmatter.image}
                imageDescription={node.frontmatter.imageDescription}
              >
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.abstract || node.excerpt}</p>

                <p className={styles.date}>
                  <time dateTime={node.frontmatter.date}>
                    {node.frontmatter.dateString}
                  </time>
                </p>
              </Card>
            </Link>
          </article>
        ))
      }
    />
  </React.Fragment>
);

export default NewsSection;
