import React from "react";
import styled from "styled-components";

const SponsorContainer = styled.div`	
	background-color: black;
	border-radius: 40px;
	display: flex;
	flex-direction: column;
	width: 40%;
	margin: 5%;
`
const Img = styled.img`
	border-radius: 40px 40px 0px 0px;
	flex: 1;
	object-fit: cover;
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
	border-radius: 40px;
	width: 30%;
	height: 30%;
	margin: 5%;
	object-fit: cover;
`

const SponsorBronze = styled.img`
	border-radius: 30px;
	width: 20%;
	height: 20%;
	margin: 3%;
	object-fit: cover;
`

const SponsorOther = styled.img`
	width: 15%;
	height: 15%;
	border-radius: 20px;
	margin: 3%;
	object-fit: cover;
`

export { SponsorLarge, SponsorMedium, SponsorSilver, SponsorBronze, SponsorOther };