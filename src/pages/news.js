import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import Sample from "../../images/sample.png";

const PostContaier = styled.div`
  width: 600px;
  border-radius: 7px;
  color: white;
  background-color: #C8102E;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
`

const PostList = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  border-radius: 7px 7px 0px 0px;
  flex: 2;
`

const PostText = styled.div`
  margin: 20px;
  flex: 1;
`

const DateP = styled.p`
  float: right;
`

const Post = () => (
  <PostContaier>
    <Image src={Sample} />
    <PostText>
      <h3>Post Title</h3>
      <p> This is a snippet from the post text. It will be queried through markdown front matter properties in the real version.</p>
      <DateP>02.03.2018</DateP>
    </PostText>
  </PostContaier>
);

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Post />
        <Post />
        <Post />
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
