import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import Post from "../components/PostPreview";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import Sample from "../../images/sample.png";

const PostList = styled.div`
  display: flex;
  flex-direction: column;
`

const postContent = "This is a snippet from the post text. It will be queried through markdown front matter properties in the real version.";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Post title="Post Title" imgUrl={Sample} content={postContent} date="02.03.2019" />
        <Post title="Post Title" imgUrl={Sample} content={postContent} date="02.03.2019" />
        <Post title="Post Title" imgUrl={Sample} content={postContent} date="02.03.2019" />
      </div>
    );
  }
}

/*
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/(posts)/.*\\.md$/"}}
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
