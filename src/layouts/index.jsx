import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig"
import Link from "gatsby-link";
import "./index.css";

import fb from "./fb.png"
import insta from "./insta.png"
import frt from "./frt.png"
import banner from "./banner.png"

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{margin: '0 auto'}}>
        <Helmet>
          <title>BME Formula Racing Team</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <header style={{display: 'inline-block', width: 1220}}>
          <div style={{float: 'left'}}>
            <Link to='/'>
              <div style={{display: 'inline'}}>
                <img src={frt} />
                <img src={banner} />
              </div>
            </Link>
            
          </div>
          <div style={{float: 'right'}}>
          <Link to='/' style={{margin: 10}}>
              Hírek
            </Link>
            <Link to='/about' style={{margin: 10}}>
              Csapat
            </Link>
            <Link to='/cars' style={{margin: 10}}>
              Autók
            </Link>
            <Link to='/gallery' style={{margin: 10}}>
              Galéria
            </Link>
          </div>
        </header>

        <br />

        {children()}

        <footer style={{display: 'inline-block', 'justifyContent': 'center', 'alignContents': 'center', position: 'fixed', bottom:'10'}}>

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


          <a href="mailto://korber314@gmail.com" style={{margin: 50}}>Kapcsolat</a>

        </footer>

      </div>
    );
  }
}
