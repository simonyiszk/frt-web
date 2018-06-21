import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Card from '../components/Card';
import Container from '../components/Container';
import Layout from '../components/Layout';
import styles from './sponsors.module.scss';

const SponsorsPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query SponsorsPageQuery {
          allSponsorsYaml {
            edges {
              node {
                category
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
      `}
      render={staticData =>
        staticData.allSponsorsYaml.edges.map(({ node }) => (
          <Container key={node.category}>
            <h1>{node.category}</h1>

            {node.organizations.map(organization => (
              <a href={organization.website} className={styles.sponsorLink}>
                <Card imageSrc={organization.logo.image}>
                  <Container fluid className={styles.sponsorLogoContainer}>
                    <img
                      src={organization.logo.image}
                      alt=""
                      className={styles.sponsorLogoImage}
                      style={{ height: organization.logo.height }}
                    />
                  </Container>

                  <Container fluid>
                    <h2 className={styles.sponsorName}>{organization.name}</h2>
                    {organization.description && (
                      <p>{organization.description}</p>
                    )}
                  </Container>
                </Card>
              </a>
            ))}
          </Container>
        ))
      }
    />
  </Layout>
);

export default SponsorsPage;
