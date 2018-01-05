import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class CarsPage extends Component {
  render() {
    return (
      <div style={{'color': 'white'}}>
        <Helmet title={`Cars | ${config.siteTitle}`} />
       	<div>
       		Cars page
       	</div>
      </div>
    );
  }
}

export default CarsPage;
