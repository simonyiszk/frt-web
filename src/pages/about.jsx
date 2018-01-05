import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div style={{'color': 'white'}}>
        <Helmet title={`About | ${config.siteTitle}`} />
       	<div>
       		About page
       	</div>
      </div>
    );
  }
}

export default AboutPage;
