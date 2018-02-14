import React from "react";
import styled from "styled-components";

import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import CarDetail from "../components/CarDetail/CarDetail";

const Wrapper = styled.div`
  display: flex;
  scroll-snap-type: mandatory;
  overflow: hidden;
  width: 100%;
  overflow-x: scroll;  
  overflow-y: auto;
`

export default class Cars extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      itemsCount: 3,
      shownItemIndex: 0,
    };
  }

  render(){
    return (
      <div>
        <Wrapper>
          <CarDetail id="0" />
          <CarDetail id="1" />
          <CarDetail id="2" />
        </Wrapper>
       {/* <span>{this.state.shownItemIndex}</span> */}
      </div>
      );
  }
}