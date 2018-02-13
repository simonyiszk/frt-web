import React, { Component } from "react";

import Fb from './images/Facebook.svg';
import Insta from './images/Instagram.svg';
import Mail from './images/Mail.svg';
import YouTube from './images/YouTube.svg';

/* 'tis but a comment */

export default class Footer extends Component {
  render() {
    return(
        <div style={{backgroundColor: "black", display: 'flex', flex: 1, justifyContent: 'space-between'}}>
          <div style={{width: "25%", display: "flex", justifyContent: "space-around", alignItems: 'center', padding: "5px"}}>
            <a target="_blank" href="https://www.facebook.com/FormulaRacingTeam/">
              <img src={Fb} />
            </a>
            <a target="_blank" href="https://www.instagram.com/bme_formularacingteam/">
              <img src={Insta} />
            </a>
            <a target="_blank" href="mailto:info.bme.frt@gmail.com">
              <img src={Mail} />
            </a>
            <a target="_blank" href="https://www.youtube.com/user/bmeFRT">
              <img src={YouTube} />
            </a>
          </div>

          <div style={{display: "flex", alignItems: 'center', paddingRight: "10px"}}>
            <a href="http://schdesign.hu" target="_blank">Designed by SCHDesign</a><a target="_blank" href="https://youtu.be/4LfJnj66HVQ?t=17s">.</a>
          </div>
        </div>
      );
  }
}
