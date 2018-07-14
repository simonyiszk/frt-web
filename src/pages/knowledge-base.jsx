import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Measure from '../components/Measure';
import styles from './knowledge-base.module.scss';

const KnowledgeBasePage = ({ data }) => (
  <Layout>
    <Container>
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
              <section key={item.title}>
                <h4>{item.title}</h4>

                <div className={styles.itemDataContainer}>
                  <p>{item.description}</p>

                  <dl className={styles.itemDetails}>
                    {item.details != null &&
                      item.details.map(({ key, value }) => (
                        <React.Fragment key={key}>
                          <dt>{key}</dt>
                          <dd>{value}</dd>
                        </React.Fragment>
                      ))}
                  </dl>
                </div>
              </section>
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
