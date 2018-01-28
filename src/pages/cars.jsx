import React from "react";

import styled from "styled-components";

import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import CarDetail from "../components/CarDetail/CarDetail"

const Wrapper = styled.div`
  display: flex;
  scroll-snap-type: mandatory;
  overflow: hidden;
  width: 100%;
  overflow-x: scroll;  
`


export default class Cars extends React.Component {
  render(){
    return (
      <Wrapper>
        <CarDetail />
        <CarDetail />
        <CarDetail />
      </Wrapper>
      );
  }
}





/*
old
class Cars extends React.Component {
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

export default Cars;

/* eslint no-undef: "off"
export const pageQuery = graphql`
  query carsQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/(cars)/.*\\.md$/"}}
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
*/
