import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

export default class CarTemplate extends React.Component {
  render(){
    return(
      <div>cartemplate</div>
  );
  }
}

/*
export const memberQuery = graphql`
  query memberBySlugQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;
*/