import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class GalleryPage extends Component {
  render() {
    return (
      <div style={{'color': 'white'}}>
        <Helmet title={`Gallery | ${config.siteTitle}`} />
       	<div>
       		About page
       	</div>
      </div>
    );
  }
}

export default GalleryPage;
