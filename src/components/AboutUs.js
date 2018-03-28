import React, { Component } from "react";
import styled from "styled-components";
import { translate } from "react-i18next";

import Dude from "../images/dude.png";
import Team from "../images/team.png";

const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 5px auto;
`

const Description = styled.div`
  width: 400px;
  margin: 20px;
  background: linear-gradient(to bottom, rgba(200, 16, 46, 1.0), rgba(200, 16, 46, 0.2));
  padding: 10px;
  border-radius: 5px;
`

const IllustrationContainer = styled.div`
  width: 500px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justifyContent: space-between;
`

const Img = styled.img`
	border-radius: 10px;
	object-fit: cover;
`
class AboutUs extends Component {
    render() {
      const { t } = this.props;
        return (
			<Container>
				<Description>
					<h1>{t("history")}</h1>
					<p>A BME Formula Racing Teamet 2007 elején hívta életre néhány tehetséges mérnökhallgató, hogy első és anno egyetlen magyar csapatként versenyautót építsenek és részt vegyenek a világméretű Formula Student versenysorozatban.

						Az akkor még csak 18 fős alakulatot követte egy 50 fős második generáció, valamint egy harmadik generációs Junior csapat, akikkel kiegészülve az FRT ma már mintegy 100 tagot számlál, az egyetem számos különböző karát képviselve. A csapat mérnökei és menedzserei különböző területeken dolgoznak ugyanazért a célért, a leendő mérnökök tudásának gyarapításáért és a minél jobb eredmények eléréséért, valamint hogy megteremtsék a magas szintű anyagi, szervezeti és tárgyi feltételeket. Többek között ennek köszönhető, hogy 2007 óta kitűnően helytálltak a világ legjobbjai között német, angol, olasz és magyar versenyeken.

						A csapat hatékony működését igazolja, hogy egyre jobb műszaki eredményekkel, és az iparban is helytálló munkaerővel szolgál. A Formula Racing Team nagy hangsúlyt fektet az oktatásra, ezért a csapatnál dolgozó idősebb, és nagy tudású mérnökök elméleti ismeretekkel is segítik a Junior csapatot. Minden adott tehát ahhoz, hogy a csapat még évekig képviselje Magyarországot és a BME-t a Formula Student versenyeken, lehetőséget adva ezzel a hallgatóknak, hogy a legjobbak között versenyezzenek.
					</p>
				</Description>
				<IllustrationContainer>
					<Img src={Team} />
					<Img src={Dude} />
				</IllustrationContainer>
			</Container>
        );
    }
}

export default translate("AboutUs")(AboutUs);
