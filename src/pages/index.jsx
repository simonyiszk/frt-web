import React from "react";
import styled from "styled-components";
import Waypoint from "react-waypoint";

import Index from "./news";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-x: scroll;  
  overflow-y: auto;
`

const Container = styled.div`
	width: 100%;
	height: 100%;
	flex-shrink: none;
	border: 1px solid red;
	flex-shrink: 0;
`

const Ul = styled.ul`
	list-style-type: none;
    margin: 0;
    padding: 0;
    border: 1px solid red;
    li {
    	display: inline-block;
    	margin: 5px;
    }
`

const Selected = styled.li`
	color: red;
`

export default class IndexPage extends React.Component {
	state = {
		sections: ['one', 'two', 'three', "four", 'five'],
		selectedIndex: 0,
	};

	scrollTo = (index) => {
		document.getElementById(this.state.sections[index]).scrollIntoView({
		  behavior: 'smooth' 
		});
	}

	entered = (index) => {
    	this.setState(p => ({
    		selectedIndex: index,
    	}));
	}

	step = (direction) => {
		const { selectedIndex, sections } = this.state;
		let newIndex;
		if (direction === "FORWARD") {
			newIndex = selectedIndex === sections.length ? sections.length : selectedIndex + 1;
		}
		else if (direction === "BACKWARD") {
			newIndex = selectedIndex === 0 ? 0 : selectedIndex - 1;
		}
		this.setState(p => ({
			selectedIndex: newIndex
		}));
		this.scrollTo(newIndex);
	}

	render(){
		return (
			<div>
				<div style={{display: "flex", justifyContent: "center"}}>
					<button onClick={()=>this.step("BACKWARD")}>⬅️</button>
					<Ul>
						{this.state.sections.map((item, index) => ( index === this.state.selectedIndex ?
							<Selected key={index} onClick={()=>this.scrollTo(index)}>{item}</Selected>
							:
							<li key={index} onClick={()=>this.scrollTo(index)}>{item}</li>
							))}
					</Ul>
					<button onClick={()=>this.step("FORWARD")} >➡️</button>
				</div>
			<Wrapper>
				{this.state.sections.map((item, index) => (
					<Waypoint key={index} onEnter={()=>this.entered(index)} topOffset="30%" bottomOffset="30%" horizontal>
						<Container>
							<h1 id={item}>{item}</h1>
							<p>
								Doloremque harum nisi minima est veritatis. Ea exercitationem aliquam voluptas nesciunt ducimus. Vitae sit aut et. Non qui praesentium aliquid autem labore qui. Atque totam illum nemo ad dolor sit voluptas.
								Debitis in ab corrupti est eum possimus illo minus. Dolor perspiciatis ut voluptatem quia et corrupti. Facere nihil aspernatur qui ex voluptates. Voluptas doloremque voluptatem vero.
								Rerum vero sit dolor qui impedit. Dolores saepe sit modi. Non quia ducimus consectetur.
								Quis asperiores voluptatum et qui cupiditate animi. Labore vitae magni quos officia velit ea magni temporibus. Sint voluptas fugiat quisquam qui.
								Est culpa nihil sit aut. Voluptas et eaque deserunt odio accusantium unde quis id. Iste facere expedita aperiam corporis accusantium. Qui sit rerum sed omnis nisi quia.
							</p>
						</Container>
					</Waypoint>
					))}
			</Wrapper>
			</div>
			);
	}
}

