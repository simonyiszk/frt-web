import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Measure from '../components/Measure';
import styles from './knowledge-base.module.scss';

const KnowledgeBasePage = ({ data }) => (
  <Layout>
    <Container className={styles.mainContainer}>
      <article
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />

      {data.allEventTypesYaml.edges.map(({ node }) => (
        <article key={node.category} className={styles.eventTypeContainer}>
          <Measure>
            <h3>{node.category}</h3>
            <p>{node.description}</p>
          </Measure>

          <div>
            {node.items.map(item => (
              <Measure
                key={item.title}
                className={styles.itemDataOuterContainer}
              >
                <section className={styles.itemDataInnerContainer}>
                  <div className={styles.itemIconContainer}>
                    <img
                      src={item.icon}
                      alt=""
                      className={styles.itemIconImage}
                    />
                  </div>

                  <Measure>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <p>{item.description}</p>
                  </Measure>

                  <dl className={styles.itemDetails}>
                    {item.details != null &&
                      item.details.map(({ key, value }) => (
                        <React.Fragment key={key}>
                          <dt>{key}</dt>
                          <dd>{value}</dd>
                        </React.Fragment>
                      ))}
                  </dl>
                </section>
              </Measure>
            ))}
          </div>
        </article>
      ))}
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

    allEventTypesYaml {
      edges {
        node {
          category
          description
          items {
            title
            description
            icon
            details {
              key
              value
            }
          }
        }
      }
    }
  }
`;
