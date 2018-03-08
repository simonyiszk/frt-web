import React, { Component } from "react";
import Link from 'gatsby-link';
import styled from "styled-components";

import Logo from "../images/frt_logo.svg";

const Li = styled.li`
	border-right: 1px solid #c8102e;
	flex: 1;
	text-align: center;
	padding: 5px;
	color: white;
	text-decoration: none;
	&:last-child {
		border-right: none;
	}
`

const SelectedLi = Li.extend`
	text-decoration: underline;
	text-decoration-color: #c8102e;
`

const HeaderContainer = styled.header`
	display: flex;
	flex: 1;
	justify-content: space-between;
	background: linear-gradient(to bottom, black, black 60%, #212121);
`

const Home = styled.div`
	height: 100%;
	width: 100%;
	display:flex;
	margin: 0 10px;
	justify-content: flex-start;
	padding: 0px 5px;
`

const Img = styled.img`
	padding: 2px;
	display: block;
`

const Nav = styled.nav`
	width: 60%;
	display: flex;
	align-items: center;
`

const Ul = styled.ul`
	display: flex;
	color: white;
	flex: 1;
	list-style: none;
	justif-content: space-between;
`

export default class Header extends Component {
	render() {
		return (
			<HeaderContainer>
				<Link exact to="/">
					<Home>
						<img src={Logo} />
					</Home>
				</Link>
				<Nav>
					<Ul>
						<Li><Link to="/news/">Hírek</Link></Li>
						<Li><Link to="/about/">Rólunk</Link></Li>
						<SelectedLi><Link to="/cars/">Autók</Link></SelectedLi>
						<Li><Link to="/sponsors/">Szponzoraink</Link></Li>
						<Li><Link to="/contact/">Kapcsolat</Link></Li>
					</Ul>
				</Nav>
			</HeaderContainer>
		);
	}
}

/*<Li><Link to="/gallery/">Galléria</Link></Li>*/