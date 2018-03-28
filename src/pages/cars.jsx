import React from "react";
import styled from "styled-components";

import Helmet from "react-helmet";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

import HeavyArrow from "../images/arrow-heavy.svg";
import LightArrow from "../images/arrow-light.svg";
import SelectedLi from "../images/selected.svg";
import PassiveLi from "../images/other.svg";

import CarDetail from "../components/CarDetail";

const Wrapper = styled.div`
  display: flex;
  scroll-snap-type: mandatory;
  overflow: hidden;
  width: 100%;
  overflow-x: scroll;  
  overflow-y: auto;
`

const Ul = styled.ul`
  list-style-type: none;
  margin: 5px;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  vertical-align: center;
  li {
    margin: 5px;
    display: flex;
    cursor: hand;
  }
`

const Img = styled.img`
  cursor: hand;
`

const Rimg = Img.extend`
  transform: rotate(180deg);
`



export default class Cars extends React.Component {
  state = {
      sections: ['0', '1', '2'],
      selectedIndex: 0
    }

    scrollTo = (index) => {
      this.setState(p => ({
        selectedIndex: index,
      }))
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
        newIndex = selectedIndex === sections.length - 1 ? sections.length - 1 : selectedIndex + 1;
      }
      else if (direction === "BACKWARD") {
        newIndex = selectedIndex === 0 ? 0 : selectedIndex - 1;
      }
      else if (direction === "END") {
        newIndex = sections.length - 1;
      }
      else if (direction === "START") {
        newIndex = 0;
      }
      this.setState(p => ({
        selectedIndex: newIndex
      }));
      this.scrollTo(newIndex);
    }

  render(){
    const { t } = this.props;
    return (
      <div>
        <Wrapper>
          {this.state.sections.map((item, index) => (
            <CarDetail key={index} id={index} t={t}/>
            ))}
        </Wrapper>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Img onClick={()=>this.step("START")} src={HeavyArrow} />
          <Img onClick={()=>this.step("BACKWARD")} src={LightArrow} />
          <Ul>
            {this.state.sections.map((item, index) => (
                <li key={index} onClick={()=>this.scrollTo(index)}>
                  {index === this.state.selectedIndex ? <img src={SelectedLi} /> : <img src={PassiveLi} />}
                </li>
              ))}
          </Ul>
          <Rimg onClick={()=>this.step("FORWARD")} src={LightArrow} />
          <Rimg onClick={()=>this.step("END")} src={HeavyArrow} />
        </div>
      </div>
      );
  }
}