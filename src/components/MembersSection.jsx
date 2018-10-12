import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Avatar from './Avatar';
import SectionTitle from './SectionTitle';
import styles from './MembersSection.module.scss';

const MembersSection = () => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        {
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
                <div
                  key={`${person.name}-${person.image}`}
                  className={styles.personContainer}
                >
                  <Avatar src={person.image} className={styles.personImage} />
                  <h2 className={styles.personName}>{person.name}</h2>
                  <div className={styles.personRole}>{person.role}</div>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))
      }
    />
  </React.Fragment>
);

export default MembersSection;
