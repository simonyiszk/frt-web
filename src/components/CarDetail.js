import React from 'react';
import styled from 'styled-components';

import Num from "../images/number.svg";
import Circle from "../images/Circle.svg"
import Car from "../images/car.png";

import Detail from "../images/detail.png";

const Wrapper = styled.div`
	display: flex;
	scroll-snap-align: start;
	height: 100%;
	width: 100%;
  margin: auto 0px;
	justify-content: space-between;
	flex-shrink: 0;
`

const TextSection = styled.div`
	display: flex;
	flex: 1;
	margin: 20px;
	flex-direction: column;
`

const DetailImage = styled.img`
	margin: 10px;
`

const DataSection = styled.div`
	display: flex;
	flex: 2;
	margin-top: 20px;
`

const BackgroundCirle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  background-image: url(${Circle});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  width: 100%;
  height: 100%;
`
const CarContainer = styled.img`
  width : 100%;
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  padding: 50px 0 px;
`

const CarNumber = styled.h1`
  margin: 20px;
  font-size: 10rem;
  color: rgba(255, 255, 255, 0.3);
`

const CarDetail = ({id}) => (
	<Wrapper id={id}>
          <TextSection>
          <article>
            <h1>FRC - 005</h1>
            <p>
              A 2011-es,  csapaton belül csak “Maula” néven hívott versenyautó műszaki tartalma a csapat mérnökei szerint még sok lehetőséget rejtettek magukban. A koncepció adott volt, a terveket átgondolva és továbbfejlesztve éreztük, hogy egy minden eddiginél sikeresebb versenyautó megalkotására van lehetőségünk. Mindamellett, hogy az autó fő geometriai paraméterei közel megegyeznek az előző évi jármű (FRC-004) adataival, számtalan teljesen új dolog került az autóba.

              Jelentős és szembetűnő újítás a szélesebb gumiabroncsok alkalmazása, amely jobb tapadást biztosít az autónak. Fő célunk a tömeg csökkentése volt, így kerültek újratervezésre többek között a méltán elhíresült tengelycsonkállványok (upright-ok) is.

              A 2012-es szezon legnagyobb változása az előző évekhez képest a korábbinál sokkal több teszt, amelynek tapasztalatai biztosították a csapat számára az autó versenyszámonként eltérő finomhangolási beállításait. Ezen újításokkal a csapat a világ élmezőnyébe delegálta magát, kiváló eredményeket elérve mind a Formula Student Germany-n Hockenheimben, mind a Győr-Gönyűi Kikötőben harmadszor megrendezett Formula Student Hungary versenyen.
            </p>
            <div style={{display: "flex"}}>
              <DetailImage src={Detail} />
              <DetailImage src={Detail} />
            </div>
           </article>
          </TextSection>
          <DataSection>
            <BackgroundCirle>
              <CarNumber>005</CarNumber>
              <CarContainer src={Car} />
              <StatsContainer>
                <div>
                  <h3>Tömeg:</h3>
                  <h1>221 kg</h1>
                </div>
                <div>
                  <h3>Gyorsulás (0-100 km/h):</h3>
                  <h1>3.6 sec</h1>
                </div>
                <div>
                  <h3>Végsebesség:</h3>
                  <h1>200+ km/h</h1>
                </div>
              </StatsContainer>
            </BackgroundCirle>
          </DataSection>
        </Wrapper>
);

export default CarDetail;