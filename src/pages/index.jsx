import React from "react";
import styled from "styled-components";

import {SponsorLarge, SponsorMedium, SponsorSilver, SponsorBronze, SponsorOther} from "../components/SponsorLogos.js";

//import Index from "./news";
import Audi from "../../images/audi.png";



export default class IndexPage extends React.Component {
	render(){
		return (
			<div>
				<SponsorLarge name="Audi" text="We love Audi, our beloved sponsor and benefactor, best cars west of the Danube, please buy their cars, thanks" image={Audi} />
				<SponsorMedium name="Audi" image={Audi} />
				<SponsorSilver src={Audi} />
				<SponsorBronze src={Audi} />
				<SponsorOther src={Audi} />
			</div>
			);
	}
}

