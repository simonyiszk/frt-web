import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Card from '../components/Card';
import Container from '../components/Container';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import styles from './sponsors.module.scss';

const SponsorsPage = ({ data }) => (
  <Layout>
    {data.allSponsorsYaml.edges.map(({ node }) => (
      <Container key={node.category}>
        <SectionTitle>{node.category}</SectionTitle>

        <div className={styles.organizationsContainer}>
          {node.organizations.map(organization => (
            <div
              key={organization.name}
              style={{ flex: `0 0 ${100 / node.maxOrganizationsPerLine}%` }}
            >
              <a href={organization.website} className={styles.sponsorLink}>
                <Card className={styles.sponsorCard}>
                  <div
                    fluid
                    className={styles.sponsorLogoContainer}
                    style={{ height: `${32 / node.maxOrganizationsPerLine}em` }}
                  >
                    <div
                      aria-label={node.showHeaders ? organization.name : ''}
                      className={styles.sponsorLogoImage}
                      style={{
                        backgroundImage: `url(${encodeURI(
                          organization.logo.image,
                        )})`,
                      }}
                    />
                  </div>

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
  {
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
