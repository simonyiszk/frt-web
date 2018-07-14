import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import MapImageSrc from '../assets/map.svg';
import Card from '../components/Card';
import Container from '../components/Container';
import Layout from '../components/Layout';
import styles from './contact.module.scss';

const KnowledgeBasePage = ({ data }) => (
  <Layout verticallyCentered>
    <Container className={styles.mainContainer}>
      <article>
        <Card gradient className={styles.mainCard}>
          <Container fluid className={styles.contactInfoContainer}>
            <h1>Műhely</h1>
            <p>
              <a
                href={data.site.siteMetadata.siteAddressURL}
                className={styles.link}
              >
                {data.site.siteMetadata.siteAddressPretty}
              </a>
            </p>

            <h1>E-mail</h1>
            <p>
              <a
                href={`mailto:${data.site.siteMetadata.siteEmail}`}
                className={styles.link}
              >
                {data.site.siteMetadata.siteEmail}
              </a>
            </p>
          </Container>

          <div className={styles.mapImageContainer}>
            <a href={data.site.siteMetadata.siteAddressURL}>
              <img
                src={MapImageSrc}
                alt={data.site.siteMetadata.siteAddressPretty}
                className={styles.mapImage}
              />
            </a>
          </div>
        </Card>
      </article>
    </Container>
  </Layout>
);

KnowledgeBasePage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default KnowledgeBasePage;

export const query = graphql`
  {
    site {
      siteMetadata {
        siteAddressURL
        siteAddressPretty
        siteEmail
      }
    }
  }
`;
