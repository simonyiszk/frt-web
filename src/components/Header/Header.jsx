import React, { Component } from "react";
import Link from 'gatsby-link';

import Logo from "./images/frt_logo.svg";

const liStyle = {
	borderRight: "1px solid #c8102e",
	flex: 1,
	textAlign: 'center',
	padding: '5px',
	color: "white",
	textDecoration: "none"
};

const selectedLiStyle = {
	...liStyle,
	textDecoration: "underline",
	textDecorationColor: "#c8102e"
};

export default class Header extends Component {
	render() {
		return (
			<header style={{display: "flex", flex: 1}}>
				<div style={{backgroundColor: "black", display: 'flex', flex: 1, justifyContent: "space-between"}}>
					<img style={{width: "25%", display:"flex", margin: "0 10px"}} src={Logo}/>
					<nav style={{width: "60%", display: "flex", alignItems: "center"}}>
						<ul style={{display: 'flex', color: 'white', flex: 1, listStyle: "none", justifyContent:"space-between"}}>
							<li style={liStyle}><Link to="/news/">Hírek</Link></li>
							<li style={liStyle}><Link to="/about/">Rólunk</Link></li>
							<li style={selectedLiStyle}><Link to="/cars/">Autók</Link></li>
							<li style={liStyle}><Link to="/gallery/">Galléria</Link></li>
							<li style={liStyle}><Link to="/sponsors/">Szponzoraink</Link></li>
							<li style={liStyle}><Link to="/404/">Kapcsolat</Link></li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}