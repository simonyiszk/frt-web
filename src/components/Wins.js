import React, { Component } from "react";
import styled from "styled-components";

import TrophyItem from "../components/Trophy";

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 40px 0px;
`

const TrophyCase = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const TropyContainer = styled.div`
	margin: 20px;
`

const SideBar = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
`

const Ul = styled.ul`
	position: absolute;
	padding: 10px;
	border-left: 5px solid rgb(200, 16, 46);
`

const Li = styled.li`
	list-style: none;
`

const Year = ({data, id}) => (
	<div id={id}>
		<h1>{data["ev"]}</h1>
		{data["versenyek"].map((item, index) =>(
			<TrophyItem key={index} data={item} />
			))}
	</div>
);

export default class Wins extends Component {
	state = {races: sampleData}
    render() {
        return (
        	<Container>
        		<TrophyCase>
        		{this.state.races.map((item, index)=> (
        			<Year key={index} data={item} id={index} />
        		))}
        		</TrophyCase>
        	<SideBar>
        		<Ul>
        		{this.state.races.map((item, index)=> (
        			<Li key={index}>
        				<a href={"#"+index}>
        					<h3>
	        					{item["ev"]}
	        				</h3>
	        			</a>
        			</Li>
        		))}
        		</Ul>
        	</SideBar>
        	</Container>
        );
    }
}



const sampleRace = {
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

const sampleYearOne = {
	"ev": 2017,
	"versenyek": [
		sampleRace,
		sampleRace,
		sampleRace,
	]
}

const sampleYearTwo = {
	"ev": 2016,
	"versenyek": [
		sampleRace,
		sampleRace,
		sampleRace,
	]
}

const sampleYearThree = {
	"ev": 2015,
	"versenyek": [
		sampleRace,
		sampleRace,
		sampleRace,
	]
}

const sampleData = [
	sampleYearOne,
	sampleYearTwo,
	sampleYearThree,
]