import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
	display: flex;
	width: 70%;
	background: linear-gradient(to bottom, rgba(200, 16, 46, 1.0), rgba(200, 16, 46, 0.2));
	height: 70%;
	border-radius: 10px;
`

const Info = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding-left: 10%;
	justify-content: space-around;
	margin: 0px auto;
`

const Map = styled.iframe`
	flex: 1;
	border-radius: 0px 5px 5px 0px;
	border: none;
`

const TextContainer = styled.div`
	* {
		margin: 5px;
	}
`

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Contact = () => (
<Container>
	<ContactContainer>
		<Info>
			<TextContainer>
				<h1>Műhely:</h1>
				<h3>1205, Budapest Hosszú utca 156.</h3>
			</TextContainer>
			<TextContainer>
				<h1>E-mail:</h1>
				<h3><a href="mailto:info.bme.frt@gmail.com">info.bme.frt@gmail.com</a></h3>
			</TextContainer>
		</Info>
		<Map src="https://www.google.com/maps/embed/v1/place?q=1205%2C%20Budapest%20Hossz%C3%BA%20utca%20156.&key=AIzaSyBO67eJd_a2i7HzMeoGVY2w54zWdhlFjn4" allowfullscreen></Map>
	</ContactContainer>
</Container>
)

export default Contact;