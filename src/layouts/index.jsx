import React from "react";
import styled from 'styled-components';

import "./index.css";

import Header from '../components/Header';
import Footer from '../components/Footer';

const Wrapper = styled.div`
	background-color: #212121;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	position: absolute;
`

//Header-Footer Container
const HFContainer = styled.div` 
	height: 10%;
	width: 100%;
	margin: 0;
	display: flex;
	items-align: center;
`

const ContentContainer = styled.div`
	height: 80%;
	width: 100%;
	overflow: scroll;
`

export default class IndexLayout extends React.Component {
	render(){
		const { children } = this.props;
		return(
			<Wrapper>
				<HFContainer>
					<Header></Header>
				</HFContainer>
				<ContentContainer>
					{children()}
				</ContentContainer>
				<HFContainer>
					<Footer></Footer>
				</HFContainer>
			</Wrapper>
			);
		}
	}