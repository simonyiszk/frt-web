import React, { Component } from "react";
import styled from "styled-components";
import { translate } from "react-i18next";

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
	justify-content: space-around;
`

const Diamond = ({ sponsors, t }) => (
	<div>
		<h1>{t("diamond")}</h1>
		<SponsorContainer>
			<SponsorLarge name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
			<SponsorLarge name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
			<SponsorLarge name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
			<SponsorLarge name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
		</SponsorContainer>
	</div>
)

const Gold = ({ sponsors, t }) => (
	<div>
		<h1>{t("gold")}</h1>
		<SponsorContainer>
			<SponsorMedium name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
			<SponsorMedium name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
			<SponsorMedium name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
			<SponsorMedium name="Audi" text="Audi is the bast car company in the history fo car companies, maybe ever." image={Audi} />
		</SponsorContainer>
	</div>
)

const Silver = ({ sponsors, t }) => (
	<div>
		<h1>{t("silver")}</h1>
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

const Bronze = ({ sponsors, t }) => (
	<div>
		<h1>{t("bronze")}</h1>
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

const Others = ({ sponsors, t }) => (
	<div>
		<h1>{t("others")}</h1>
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
	const { t } = this.props;
    return (
    	<Container>	
    		<Diamond t={t} />
    		<Gold t={t} />
    		<Silver t={t} />
    		<Bronze t={t} />
    		<Others t={t} />
    	</Container>
    );
  }
}

export default translate("Sponsors")(SponsorsPage);
