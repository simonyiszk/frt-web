import React from "react";
import styled from "styled-components";

const PersonContainer = styled.div`
	background-color: rgb(200, 16, 46);
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	width: 15%;
	margin: 20px;
`

const Img = styled.img`
	flex: 6;
	border-radius: 5px 5px 0px 0px;
	max-width:100%;
	max-height:100%;
	object-fit: cover;
`

const NameContainer = styled.div`
	flex: 1;
	text-align: center;
	margin: 5px;
`

const PersonSimple = ({first, last, image}) => (
	<PersonContainer>
		<Img src={image} />
		<NameContainer>	
			<h2>{last}</h2>
			<h2>{first}</h2>
		</NameContainer>
	</PersonContainer>
	)

export default PersonSimple;