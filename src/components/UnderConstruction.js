import React from "react";

import FacebookLogo from "./images/facebook.svg";
import InstaLogo from "./images/instagram.svg";
import MailLogo from "./images/mail.svg";
import YouTube from "./images/youtube.svg"

import FRTLogo from "./images/frt_logo.svg";

import Render from "./images/BME_FRT_Render_Side.png";

const UnderConstruction = () => (
	<div style={{display: "flex", justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, backgroundImage: "url("+Render+"), linear-gradient(to right, #242424 , #C8102E)", backgroundRepeat: 'no-repeat'}}>
				<img src={FRTLogo} style={{display: "flex", flex: 1, verticalAlign: 'middle', padding: '20px', width: '80%'}}/>

				<div style={{display: 'flex', flex: 5, flexDirection: 'column', margin: '20px'}}>
						<h1 style={{fontSize: '3rem', display: 'flex', verticalAlign: 'center', textAlign: 'center', flex: 1}}>Az oldal fejlesztés alatt áll</h1>
						<h1  style={{fontSize: '3rem', display: 'flex', verticalAlign: 'center', textAlign: 'center', flex: 1}}>Hamarosan újra itt vagyunk</h1>
				</div>

				<div style={{display: "flex", flex: 1, justifyContent: 'space-around', margin: '10px', width: '80%'}}>

					<a href="https://www.facebook.com/FormulaRacingTeam/">
						<img src={FacebookLogo} style={{flex: 1}}/>
					</a>
	
					<a href="https://www.instagram.com/bme_formularacingteam/">
						<img src={InstaLogo} style={{flex: 1}}/>
					</a>
	
					<a href="mailto:info.bme.frt@gmail.com">
						<img src={MailLogo} style={{flex: 1}}/>
					</a>

					<a href="https://www.youtube.com/user/bmeFRT">
						<img src={YouTube} style={{flex: 1}}/>
					</a>
				</div>
			</div>
);

export default UnderConstruction;