import React from "react";
import styled from "styled-components";

//import Index from "./news";

import Portrait from "../../images/portrait.png";
import PersonSimple from "../components/PersonSimple";


export default class IndexPage extends React.Component {
	render(){
		return <PersonSimple first="Steele" last="Johnson" image={Portrait}/>;
	}
}

