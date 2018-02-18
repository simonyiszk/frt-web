import React, { Component } from "react";
import styled from "styled-components";

import Fb from './images/Facebook.svg';
import Insta from './images/Instagram.svg';
import Mail from './images/Mail.svg';
import YouTube from './images/YouTube.svg';

const Container = styled.footer`
  background-color: black;
  display: flex;
  flex: 1;
  justify-content: space-between;
`

const Links = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`

const A = styled.a`
  height: 80%;
  width: 80%;
  padding: 5px;
`

const Praise = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`

const Img = styled.img`
  height: 100%;
`

export default class Footer extends Component {
  render() {
    return(
        <Container>
          <Links>
            <A target="_blank" href="https://www.facebook.com/FormulaRacingTeam/">
              <Img src={Fb} />
            </A>
            <A target="_blank" href="https://www.instagram.com/bme_formularacingteam/">
              <Img src={Insta} />
            </A>
            <A target="_blank" href="mailto:info.bme.frt@gmail.com">
              <Img src={Mail} />
            </A>
            <A target="_blank" href="https://www.youtube.com/user/bmeFRT">
              <Img src={YouTube} />
            </A>
          </Links>

          <Praise>
            <a href="http://schdesign.hu" target="_blank">Designed by SCHDesign</a><a target="_blank" href="https://youtu.be/4LfJnj66HVQ?t=17s">.</a>
          </Praise>
        </Container>
      );
  }
}
