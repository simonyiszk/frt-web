import React from "react";
import styled from "styled-components";
import Waypoint from "react-waypoint";

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
  state = {
      items: ['0', '1', '2', '3'],
      activeIndex: 0
    }

  render(){
    return (
      <div>
        <Wrapper>
          <CarDetail id="0" />
          <CarDetail id="1" />
          <CarDetail id="2" />
        </Wrapper>
      </div>
      );
  }
}