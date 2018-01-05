import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class SponsorsPage extends Component {
  render() {
    return (
      <div style={{'color': 'white'}}>
        <Helmet title={`Sponsors | ${config.siteTitle}`} />
       	<div>
       		Sponsors page
       	</div>
      </div>
    );
  }
}

export default SponsorsPage;
