import React from "react";
import styled from "styled-components";

import Trophy from "../../images/trophy.png";


const TrophyContainer = styled.div`
	width: 1000px;
	height: 370px;
	background: linear-gradient(to bottom, rgba(200, 16, 46, 1.0), rgba(200, 16, 46, 0.2));
	display: flex;
	border-radius: 10px;
	align-items: center;
	vertical-align: center;
`

const TrophyTab = styled.div`
	background-color: black;
	display: flex;
	flex-direction: column;
	padding: 10px;
	align-items: center;
	text-align: center;
	justify-content: center;
	border-radius: 10px 0px 0px 10px;
	flex: 1;
	height: 100%;
`

const TrophyCenter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1.4;
	height: 100%;
	width: 100%;
`

const TropyDetail = styled.div`
	margin: 20px;
	padding: 10px;
	border-left: 1px solid white;
	flex: 1;
`

const DetailItem = styled.div`
	margin: 5px;
`

const TrophyItem = ({data}) => (
	<TrophyContainer>
		<TrophyTab>
			<img src={Trophy} />
			<h2>{data["verseny"]}</h2>
			<p>{data["city"]}, {data["country"]}</p>
		</TrophyTab>
		<TrophyCenter>
			<h3>Összetett</h3>
			<h1>{data["helyezes"]}. hely</h1>
			<p>({data["indulok"]} induló közül)</p>
		</TrophyCenter>
		<TropyDetail>
			{
				Object.keys(data.details).map((item, index) => (
					<DetailItem key={index}>
						<h3>{item}:</h3>
						<p>{data.details[item]}</p>
					</DetailItem>
					))}
		</TropyDetail>		
	</TrophyContainer>
	)

export default TrophyItem;

const sampleData = {
	"verseny": "Übermensch Race 2018",
	"city": "Dresden",
	"country": "Germany",
	"helyezes": 1,
	"indulok": 44,
	"details": {
		"Acceleration": "X.hely",
		"Cost & Manufacturing":"X. hely",
		"Efficiency":"X. hely",
		"Skid Pad":"X. hely",
		"Endurance":"X. hely",
		"Auto cross":"X. hely",
	}
}
