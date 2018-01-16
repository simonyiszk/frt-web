import React from "react";
import Media from "react-media";

import FacebookLogo from "./facebook.svg";
import InstaLogo from "./instagram.svg";
import MailLogo from "./mail.svg";
import YouTube from "./youtube.svg"

import FRTLogo from "./frt_logo.svg";

import Render from "./BME_FRT_Render_Side.png";

export default class IndexPage extends React.Component {
	render(){
		return(
			<div style={{display: "flex", flexDirection: 'column', position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, backgroundImage: "url("+Render+"), linear-gradient(to right, #242424 , #C8102E)", backgroundRepeat: 'no-repeat'}}>
				<div style={{display: "flex", justifyContent: 'center',  verticalAlign: 'middle', height: '15%', margin: '20'}}>
					<img src={FRTLogo} style={{margin: '20'}}/>
				</div>

				<div style={{display: 'flex', flexDirection: 'column', verticalAlign: 'middle', textAlign: 'center', height: '70%', margin: 'auto'}}>
						<h1 style={{fontSize: '3rem', zIndex: 10}}>Az oldal fejlesztés alatt áll.</h1>
						<h1  style={{fontSize: '3rem', zIndex: 10}}>Hamarosan újra itt vagyunk.</h1>
				</div>

				<div style={{display: "flex", justifyContent: 'center', height: '15%', zIndex: 10, margin: 20}}>

					<a href="https://www.facebook.com/FormulaRacingTeam/">
						<img src={FacebookLogo} style={{margin: '20', flex: 1, height: 50}}/>
					</a>
	
					<a href="https://www.instagram.com/bme_formularacingteam/">
						<img src={InstaLogo} style={{margin: '20', flex: 1, height: 50}}/>
					</a>
	
					<a href="mailto:info.bme.frt@gmail.com">
						<img src={MailLogo} style={{margin: '20', flex: 1, height: 50}}/>
					</a>

					<a href="https://www.youtube.com/user/bmeFRT">
						<img src={YouTube} style={{margin: '20', flex: 1, height: 50}}/>
					</a>
				</div>
			</div>
			);
	}
}
