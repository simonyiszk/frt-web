import React from "react";
import Media from "react-media";

import FacebookLogo from "./facebook.svg";
import InstaLogo from "./instagram.svg";
import MailLogo from "./mail.svg";

import FRTLogo from "./frt_logo.png";

import Render from "./BME_FRT_Render_Side.png";

export default class IndexPage extends React.Component {
	render(){
		return(
			<div style={{display: "flex", flexDirection: 'column', position: 'absolute', left: 0, right: 0, bottom: 0, top: 0}}>
				<img src={Render} style={{width: 'auto', height: 'auto', position: 'absolute', left: 0}} />

				<div style={{display: "flex", justifyContent: 'center', alignItems: 'center', verticalAlign: 'middle', height: '20%'}}>
					<img src={FRTLogo} style={{width: 133, height: 133, margin: 20}} />
					<h3 style={{color: 'white', alignItems: 'center'}}>BME Formula Racing Team</h3>
				</div>

				<div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', height: '60%'}}>
					<h1 style={{fontSize: 55}}>Az oldal fejlesztés alatt áll.</h1>
					<h1  style={{fontSize: 55}}>Hamarosan visszatérünk.</h1>
				</div>

				<div style={{display: "flex", justifyContent: 'center', height: '20%'}}>
					<a href="https://www.facebook.com/FormulaRacingTeam/">
						<img src={FacebookLogo} style={{margin: 50, flex: 1, height: 50}}/>
					</a>
	
					<a href="https://www.instagram.com/bme_formularacingteam/">
						<img src={InstaLogo} style={{margin: 50, flex: 1, height: 50}}/>
					</a>
	
					<a href="mailto:info.bme.frt@gmail.com">
						<img src={MailLogo} style={{margin: 50, flex: 1, height: 50}}/>
					</a>
				</div>
			</div>
			);
	}
}
