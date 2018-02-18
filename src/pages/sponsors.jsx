import React, { Component } from "react";
import styled from "styled-components";

import { SponsorLarge, SponsorMedium, SponsorSilver, SponsorBronze, SponsorOther } from "../components/SponsorLogos"

import Audi from "../images/Audi.png";

const Container = styled.div`
	background: linear-gradient(to bottom, rgba(200,16,46, 1.0), rgba(200, 16,46,0.2));
	margin: 50px auto;
	padding: 20px;
	width: 80%;
	border-radius: 10px;
`

const SponsorContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Diamond = (sponsors) => (
	<div>
		<h1>Gyémánt szintű támogatóink</h1>
		<SponsorContainer>
			<SponsorLarge name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
			<SponsorLarge name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
			<SponsorLarge name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
			<SponsorLarge name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
		</SponsorContainer>
	</div>
)

const Gold = (sponsors) => (
	<div>
		<h1>Arany szintű támogatóink</h1>
		<SponsorContainer>
			<SponsorMedium name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
			<SponsorMedium name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
			<SponsorMedium name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
			<SponsorMedium name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
		</SponsorContainer>
	</div>
)

const Silver = (sponsors) => (
	<div>
		<h1>Ezüst szintű támogatóink</h1>
		<SponsorContainer>
			<SponsorSilver src={Audi} />
			<SponsorSilver src={Audi} />
			<SponsorSilver src={Audi} />
			<SponsorSilver src={Audi} />
			<SponsorSilver src={Audi} />
			<SponsorSilver src={Audi} />
		</SponsorContainer>
	</div>
)

const Bronze = (sponsors) => (
	<div>
		<h1>Bronz szintű támogatóink</h1>
		<SponsorContainer>
			<SponsorBronze src={Audi} />
			<SponsorBronze src={Audi} />
			<SponsorBronze src={Audi} />
			<SponsorBronze src={Audi} />
			<SponsorBronze src={Audi} />
			<SponsorBronze src={Audi} />
			<SponsorBronze src={Audi} />
		</SponsorContainer>
	</div>
)

const Others = (sponsors) => (
	<div>
		<h1>További támogatóink</h1>
		<SponsorContainer>
			<SponsorOther src={Audi} />
			<SponsorOther src={Audi} />
			<SponsorOther src={Audi} />
			<SponsorOther src={Audi} />
			<SponsorOther src={Audi} />
			<SponsorOther src={Audi} />
			<SponsorOther src={Audi} />
			<SponsorOther src={Audi} />
		</SponsorContainer>
	</div>
)

class SponsorsPage extends Component {
  render() {
    return (
    	<Container>	
    		<Diamond />
    		<Gold />
    		<Silver />
    		<Bronze />
    		<Others />
    	</Container>
    );
  }
}

export default SponsorsPage;
