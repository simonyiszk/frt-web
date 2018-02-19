import React from "react";
import styled from "styled-components";


import Sample from "../../images/sample.png";
import Icon from "../../images/accicon.png";

const PostContaier = styled.div`
  width: 90%;
  border-radius: 7px;
  color: white;
  background-color: #C8102E;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
`

const Image = styled.img`
  border-radius: 7px 7px 0px 0px;
  flex: 2;
  object-fit: cover;
`

const PostText = styled.div`
  margin: 20px;
  flex: 1;
`

const DateP = styled.p`
  float: right;
`

const Post = ({imgUrl, title, content, date}) => (
  <PostContaier>
    <Image src={imgUrl} />
    <PostText>
      {title && <h3>{title}</h3>}
      <p>{content}</p>
      {date && <DateP>{date}</DateP>}
    </PostText>
  </PostContaier>
);

const Title = styled.h1`
  font-size: 3em;
`

const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 5px auto;
`

const IllustrationContainer = styled.div`
  width: 500px;
  margin: 20px;
`

const Description = styled.div`
  width: 400px;
  margin: 20px;
  background: linear-gradient(to bottom, rgba(200, 16, 46, 1.0), rgba(200, 16, 46, 0.2));
  padding: 10px;
  border-radius: 5px;
`

const RaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
`

const RaceItemContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 20px auto;
  * {
    margin: 10px;
  }
`

const Img = styled.img`
  display: block;
  width: 25%;
  height: 25%;
`

const accDesc = "Főként a motor teljesítményéről és a hajtásláncról ad jellemzést az, hogy milyen gyorsító képességgel rendelkezik a jármű. A feladat egy 75 méter hosszú táv megtétele álló helyzetből indulva a lehető legrövidebb idő alatt. Minden versenyszámhoz tartozik egy szintidő, amelynél lassabb teljesítés esetén csak a minimális 3,5 pont jár. A motorteljesítmény mellett nagy szerepe van az autó tömegének is. 300 kg-ot feltételezve a szükséges vonóerő átlagosan 2800–3200 N nagyságú, 266 mm-es kerékgördülési sugár mellett a hajtáslánc egyes elemeinek 745–850 Nm-t kell tudni elviselni.";
const accAttr = {
  "Pályahossz:": "75 méter",
  "Szintidő:": "5.8 mp  (46.55 km/h átlagsebsesség]",
  "Legjobb csapatok ideje:": "3.75-4.00 mp (67.5-72 km/h -> 0.96-1.09 g)",
}


const RaceItem = ({imgURL, title, description, attributes}) => (
  <RaceItemContainer>
    <Img src={imgURL}/>
    <div style={{width: "50%"}}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    { attributes && <div style={{width: "25%"}}>
      {
        Object.keys(attributes).map((item, index) => (
          <div key={index}>
            <h3>{item}</h3>
            <p>{attributes[item]}</p>
          </div>
        ))
      }
      </div>
    }
  </RaceItemContainer>
);

export default class FormulaStudent extends React.Component {
  render() {
    return (
    	<div>
          <Container>
            <Description> 
               <h2>Mi is a Formula Student?</h2>
               <p>A Formula Student világszerte, egyetemi és főiskolai csapatok számára megrendezett autóversenyek gyűjtőneve, amelyben egyetemi és főiskolai hallgatókból álló csapatok versenyautó tervezésben és építésben mérik össze tudásukat. A küzdelem az autó megtervezésén és megépítésén túl az autó köré felépített teljes üzleti koncepció kidolgozásából, prezentálásából, valamint a projekt működéséhez szükséges anyagi háttér biztosításából áll. 

                 A feladat lényege, hogy a csapatoknak olyan szemlélettel kell egy kicsi, együléses versenyautót fejleszteniük, mintha egy sorozatgyártásra készülő fiktív gyár kérte volna fel őket az autó megtervezésére és a prototípus elkészítésére. A versenyautó meghatározott célcsoportja a hétvégi hobbiversenyzők köre, számukra kell elkészíteni a leginkább megfelelő autót. A versenyek szabályrendszere kreatív megoldások keresésére inspirálja a résztvevőket, akik így az elméleti oktatás mellett értékes gyakorlati tapasztalatokkal is gyarapodnak.

                 Nem csupán a hallgatók, hanem a kapcsolódó iparágakban tevékenykedő cégek számára is hasznos a kezdeményezés; A Formula Student révén szorosabb kapcsolat alakulhat ki a munkáltatók és az egyetemekről, főiskolákról kikerülő hallgatók között, akik már pályakezdőként is hasznosítható, naprakész ismereteket és tudást szereznek. Az egyetemi versenyek megbecsülését jelzi, hogy az angliai futamot Silverstone-ban, az olaszországi fordulót a Ferrari fioranói pályáján, míg a németországi viadalt a Hockenheimringen rendezik. Az elmúlt években a Formula Student pártfogói között megtalálható volt Ross Brawn, a Mercedes GP csapatfőnöke és Mario Theissen, a BMW Motorsport volt igazgatója is.
               </p>
               <h2>A verseny</h2>
               <p>
               A futamok egy többnapos eseménysorozat keretében kerülnek megrendezésre, melynek első megmérettetése a gépátvétel. Ekkor ellenőrzik a bírák, hogy az autók megfelelnek-e a Formula Student által előírt műszaki és biztonsági szabályoknak. A gépátvétel után következnek a „statikus” és “dinamikus” versenyszámok. A pontszám 40%-át a statikus versenyszámok adják, míg a versenypályán mutatott teljesítmények 60%-os súllyal szerepelnek a végelszámolásnál. Ez, a közel azonos súlyozás azt jelenti, hogy a csapatoknak és az autóknak nem elég egyetlen területen jól szerepelniük, kiegyensúlyozottan jól kell teljesíteniük a verseny egészén az eredményes szerepléshez.
               </p>
             </Description>
             <IllustrationContainer>
              <Title>Formula Student</Title>
               <Post imgUrl={Sample} content="Fast AF car" />
               <Post imgUrl={Sample} content="Fast AF car" />
               <Post imgUrl={Sample} content="Fast AF car" />
             </IllustrationContainer>
          </Container>
          <RaceContainer>
            <h1>Versenyszámok</h1>
            <h2>Dinamikus</h2>
            <RaceItem imgURL={Icon} title="Gyorsulás" description={accDesc} attributes={accAttr} />
            <RaceItem imgURL={Icon} title="Gyorsulás" description={accDesc} attributes={accAttr} />
            <RaceItem imgURL={Icon} title="Gyorsulás" description={accDesc} attributes={accAttr} />
            <h2>Statikus</h2>
            <RaceItem imgURL={Icon} title="Gyorsulás" description={accDesc} />
            <RaceItem imgURL={Icon} title="Gyorsulás" description={accDesc} />
          </RaceContainer> 
      </div>
    );
  }
}


