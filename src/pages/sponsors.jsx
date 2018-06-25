import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Card from '../components/Card';
import Container from '../components/Container';
import Layout from '../components/Layout';
import styles from './sponsors.module.scss';

const SponsorsPage = ({ data }) => (
  <Layout>
    {data.allSponsorsYaml.edges.map(({ node }) => (
      <Container key={node.category}>
        <h1>{node.category}</h1>

        <div className={styles.organizationsContainer}>
          {node.organizations.map(organization => (
            <div
              key={organization.name}
              style={{ flex: `0 0 ${100 / node.maxOrganizationsPerLine}%` }}
            >
              <a href={organization.website} className={styles.sponsorLink}>
                <Card imageSrc={organization.logo.image}>
                  <Container
                    fluid
                    className={styles.sponsorLogoContainer}
                    style={{ height: `${32 / node.maxOrganizationsPerLine}em` }}
                  >
                    <img
                      src={organization.logo.image}
                      alt={node.showHeaders ? organization.name : ''}
                      className={styles.sponsorLogoImage}
                      style={{ height: organization.logo.height }}
                    />
                  </Container>

                  <Container fluid>
                    {node.showHeaders && (
                      <h2 className={styles.sponsorName}>
                        {organization.name}
                      </h2>
                    )}

                    {node.showDescriptions &&
                      organization.description && (
                        <p>{organization.description}</p>
                      )}
                  </Container>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </Container>
    ))}
  </Layout>
);

SponsorsPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default SponsorsPage;

export const query = graphql`
  query SponsorsPageQuery {
    allSponsorsYaml {
      edges {
        node {
          category
          maxOrganizationsPerLine
          showHeaders
          showDescriptions
          organizations {
            name
            description
            website
            logo {
              image
              height
            }
          }
        }
      }
    }
  }
`;
