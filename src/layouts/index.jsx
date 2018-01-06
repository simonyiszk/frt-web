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

const linkStyle = {
  margin: 10,
  padding: "20px 0"
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
        <header style={{display: 'block', height: 100}}>
          <div style={{float: 'left', padding: '20px 0'}}>
            <Link to='/'>
              <div style={{display: 'inline', padding: "20px auto"}}>
                <img src={frt} />
                <img src={banner} />
              </div>
            </Link>
          </div>
          <div style={{float: 'right',margin: "20px auto"}}>
            <Link to='/' style={linkStyle}>
              Hírek
            </Link>
            <Link to='/about' style={linkStyle}>
              Csapat
            </Link>
            <Link to='/cars' style={linkStyle}>                
              Autók
            </Link>
            <Link to='/gallery' style={linkStyle}>
              Galéria
            </Link>
          </div>
        </header>

        <div>
          {children()}
        </div>

        <footer style={{display: 'inline-block', left: 0, right: 0, 'justifyContent': 'center', 'alignContents': 'center', position: 'fixed', bottom:'10'}}>
          <div style={{float: "left"}}>
            <Link to='/sponsors' style={{margin: 50}}>
             Szponzorok
            </Link>
            {/* Placeholder*/}
            <a href="http://facebook.com" style={{margin: 50}}>
              <img src={fb} />
            </a>
            {/* Placeholder*/}
             <a href="http://instagram.com" style={{margin: 50}}>
               <img src={insta} />
             </a>
             <a href="mailto:korber314@gmail.com" style={{margin: 50}}>Kapcsolat</a>
           </div>
          <div style={{float: 'right', margin: 10}}>
            Design by SchDesign
          </div>
        </footer>
      </div>
    );
  }
}
