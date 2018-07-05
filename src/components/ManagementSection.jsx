import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Avatar from './Avatar';
import SectionTitle from './SectionTitle';
import styles from './ManagementSection.module.scss';

const ManagementSection = () => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        query ManagementSectionQuery {
          allMembersYaml {
            edges {
              node {
                category
                people {
                  name
                  role
                  image
                }
              }
            }
          }
        }
      `}
      render={staticData =>
        staticData.allMembersYaml.edges.map(({ node }) => (
          <React.Fragment key={node.category}>
            <SectionTitle>{node.category}</SectionTitle>

            <div className={styles.peopleContainer}>
              {node.people.map(person => (
                <div key={person.image}>
                  <Avatar src={person.image} className={styles.personImage} />
                  <h2 className={styles.personName}>{person.name}</h2>
                  <h3 className={styles.personRole}>{person.role}</h3>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))
      }
    />
  </React.Fragment>
);

export default ManagementSection;
