import React from "react";
import "./index.css";

export default class IndexLayout extends React.Component {
	render(){
		const { children } = this.props;
		return(
			<div>
				{children()}
			</div>
			);
		}
	}