import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

export default class TeamMemberPreview extends Component {
  render() {
    return (
      <div style={{'color': 'white'}}>
        <Helmet title={`005 | ${config.siteTitle}`} />
       	<div>
       		Team Member Preview
       	</div>
      </div>
    );
  }
}