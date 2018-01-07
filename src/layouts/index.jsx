import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig"
import Link from "gatsby-link";
import Headroom from "react-headroom"
import "./index.css";

import fb from "./fb.png"
import insta from "./insta.png"
import frt from "./frt.png"
import banner from "./banner.png"

const topNav = {
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 100
}

const linkStyle = {
  textDecoration: "none",
  margin: 50,
}

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{margin: '0 auto', color: 'white'}}>

        <Helmet>
          <title>BME Formula Racing Team</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        
        <header style={topNav}>
          <div style={{float: "left"}}>
            <Link to="/" style={{linkStyle}}>
              <div style={{display: "inline"}}>
                <img src={frt} />
                <img src={banner} />
              </div>
            </Link>
          </div>

          <div style={{float: 'right'}}>
            <Link to="/" style={{linkStyle}}>
              Hírek
            </Link>
             <Link to="/about" style={{linkStyle}}>
              Csapat
            </Link>
             <Link to="/cars" style={{linkStyle}}>
              Autók
            </Link>
             <Link to="/gallery" style={{linkStyle}}>
              Galléria
            </Link>
          </div>
        </header>

        <div style={{marginTop: 100}}>
          {children()}
        </div>

        <footer style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
          <div style={{float: "left"}}>
            <Link to="/sponsors" style={linkStyle}>
              Szponzorok
            </Link>
            <a href = "http://facebook.com" style={linkStyle}>
              <img src={fb} />
            </a>
            <a href = "http://instagram.com" style={linkStyle}>
              <img src={insta} />
            </a>
            <a href="mailto:korber314@icloud.com" style={linkStyle}>
              Kapcsolat
            </a>

          </div>
          <div style={{float: "right"}}>
            <span>Designed by SchDesign</span>
          </div>
        </footer>

      </div>
    );
  }
}
