import React, { Component } from "react";
import styled from "styled-components";

import PersonDetail from "./PersonDetail";
import PersonSimple from "./PersonSimple";

import Portrait from "../../images/portrait.png";

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 40px 0px;
`

const Leaders = styled.div`
	margin: 20px;
	display: flex;
	flex-wrap: wrap;
`

const SideBar = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	margin: 10px;
`

const Ul = styled.ul`
	position: absolute;
	padding: 10px;
	border-left: 5px solid rgb(200, 16, 46);
`

const Li = styled.li`
	list-style: none;
`

const DivisionContainer = styled.div`
	width: 70%;
	background-color: black;
	border-radius: 10px;
	margin: 20px;
	padding: 40px;
`

const Title = styled.div`
	padding: 10px;
	padding: 10px;
	border-bottom: 1px solid rgb(200, 16, 46);
`

const Peeps = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	margin: 20px 0px;
`

const Division = ({name, members}) => (
	<DivisionContainer>
		<Title><h1>{name}</h1></Title>
		<PersonDetail first="Joe" last="Smith" title="Chief" school="Keef" email="chief@keef.com" image={Portrait}/>
		<Peeps>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
			<PersonSimple first="Lil" last="Pump" image={Portrait}/>
		</Peeps>
	</DivisionContainer>
)

export default class Teams extends Component {

    render() {
        return (
			<Container>
				<div style={{width: "80%"}}>
					<Leaders>
						<PersonDetail first="Joe" last="Smith" title="Chief" school="Keef" email="chief@keef.com" image={Portrait}/>
						<PersonDetail first="Joe" last="Smith" title="Chief" school="Keef" email="chief@keef.com" image={Portrait}/>
						<PersonDetail first="Joe" last="Smith" title="Chief" school="Keef" email="chief@keef.com" image={Portrait}/>
					</Leaders>
					<Division name="Quarter Vehicle" members={[]} />
				</div>
				<SideBar>
					<Ul>
						<Li><a><h3>Quarter Vehicle</h3></a></Li>
						<Li><a><h3>Quarter Vehicle</h3></a></Li>
						<Li><a><h3>Quarter Vehicle</h3></a></Li>
					</Ul>
				</SideBar>
			</Container>
        );
    }
}
