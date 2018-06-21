import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Card from '../components/Card';
import Container from '../components/Container';
import Layout from '../components/Layout';

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
                  website
                  logo {
                    image
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
              <a href={organization.website}>
                <Card imageSrc={organization.logo.image}>
                  <h2>{organization.name}</h2>
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
