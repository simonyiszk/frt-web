import React from 'react';
import styled from 'styled-components';

import Num from "./images/number.svg";
import Circle from "./images/Circle.svg"
import Car from "./images/car.png";

import Detail from "./images/detail.png";

const Wrapper = styled.div`
	display: flex;
	scroll-snap-align: start;
	height: 100%;
	width: 100%;
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
	flex: 3;
	justify-content: flex-end;
	margin-top: 20px;
`

const Illustration = styled.img`
	position: absolute;
	right: 0;
`

const CarDetail = ({onScroll}) => (
	<Wrapper>
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
            <div style={{position: "relative"}}>
              <Illustration src={Circle} style={{top: 0, height:"100%"}}/>
              <Illustration src={Num} style={{top: 0, width: "80%"}}/>
              <Illustration src={Car} style={{bottom: 0, width: "1000px"}}/>
            </div>
          </DataSection>
        </Wrapper>
);

export default CarDetail;