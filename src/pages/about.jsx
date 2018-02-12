import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const Description = styled.div`

`

const ImageContaier = styled.div`
  width: 600px;
  border-radius: 7px;
  color: white;
  background-color: #C8102E;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
`

const Image = styled.img`
  border-radius: 7px 7px 0px 0px;
  flex: 2;
`

const ImageText = styled.div`
  margin: 20px;
  flex: 1;
`

const Img = styled.img`

`

const DynaRaceItem = styled.div`

`

const StaticRaceItem = styled.div`

`

class About extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default About;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query AboutQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/(team)/.*\\.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
