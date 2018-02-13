import React from "react";
import styled from "styled-components";

const SponsorContainer = styled.div`	
	background-color: black;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	width: 40%;
	margin: 5%;
`
const Img = styled.img`
	border-radius: 20px 20px 0px 0px;
	flex: 1;
`

const Description = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	margin: 10px;
`

const SponsorLarge = ({name, text, image}) => (
	<SponsorContainer>
		<Img src={image} />
		<Description>
			<h3>{name}</h3>
			<p>{text}</p>
		</Description>
	</SponsorContainer>
	)

const SponsorMedium = ({name, image}) => (
	<SponsorContainer>
		<Img src={image} />
		<Description>
			<h3>{name}</h3>
		</Description>
	</SponsorContainer>
	)

const SponsorSilver = styled.img`
	border-radius: 5px;
	width: 40%;
	margin: 5%;
`

const SponsorBronze = styled.img`
	border-radius: 5px;
	width: 30%;
	margin: 3%;
`

const SponsorOther = styled.img`
	border-radius: 5px;
	width: 22%;
	margin: 3%;
`

export {SponsorLarge, SponsorMedium, SponsorSilver, SponsorBronze, SponsorOther};