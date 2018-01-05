import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

export default class CarPreview extends Component {
  render() {
    return (
      <div style={{'color': 'white'}}>
        <Helmet title={`005 | ${config.siteTitle}`} />
       	<div>
       		Car Preview
       	</div>
      </div>
    );
  }
}