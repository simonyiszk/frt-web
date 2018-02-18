import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

import FormulaStudent from "../components/FormulaStudent";
import Wins from "../components/Wins";
import Teams from "../components/Teams";
import AboutUs from "../components/AboutUs";

const Container = styled.div`
	display: flex;
`

const Ul = styled.ul`
	width: 10%;
	margin: 10px;
	padding: 5px;
	flex-grow: 0;
	flex-shrink: 0;
	list-style: none;
	li {
		margin: 10px;
		padding: 10px;
		border-right: 5px solid rgb(200, 16, 46);
	}
`

export default class About extends React.Component {
	state = {shown: "FormulaStudent"} // | Wins | Teams | AboutUs
	show = (what) => {
		this.setState(p => ({
			shown: what,
		}))
	}
  render = () => {
    return (
      <Container>
      		<Ul>
      			<li><a href="#FormulaStudent" onClick={()=>this.show("FormulaStudent")}>Formula Student</a></li>
      			<li><a href="#AboutUs" onClick={()=>this.show("AboutUs")}>Formula Racing Team</a></li>
      			<li><a href="#Wins" onClick={()=>this.show("Wins")}>Versenyeink</a></li>
      			<li><a href="#Teams" onClick={()=>this.show("Teams")}>A csapat</a></li>
      		</Ul>
        {(() => {
        	switch(this.state.shown){
        		case "FormulaStudent":
        			return <FormulaStudent />;
        		case "AboutUs":
        			return <AboutUs />;
        		case "Wins":
        			return <Wins />;
        		case "Teams":
        			return <Teams />;
        		default:
        			return <AboutUs />
        		}
        	})()

        }
      </Container>
    );
  }
}