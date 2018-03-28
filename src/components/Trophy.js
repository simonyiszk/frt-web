import React from "react";
import styled from "styled-components";
import { translate } from "react-i18next";

import Trophy from "../../images/trophy.png";


const TrophyContainer = styled.div`
	width: 1000px;
	height: 370px;
	margin: 40px 0px;
	background: linear-gradient(to bottom, rgba(200, 16, 46, 1.0), rgba(200, 16, 46, 0.2));
	display: flex;
	border-radius: 10px;
	align-items: center;
	vertical-align: center;
`

const TrophyTab = styled.div`
	background-color: black;
	display: flex;
	flex-direction: column;
	padding: 10px;
	align-items: center;
	text-align: center;
	justify-content: center;
	border-radius: 10px 0px 0px 10px;
	flex: 1;
	height: 100%;
`

const TrophyCenter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1.4;
	height: 100%;
	width: 100%;
`

const TropyDetail = styled.div`
	margin: 20px;
	padding: 10px;
	border-left: 1px solid white;
	flex: 1;
`

const DetailItem = styled.div`
	margin: 5px;
`

const TrophyItem = ({data, t}) => (
	<TrophyContainer>
		<TrophyTab>
			<img src={Trophy} />
			<h2>{data["verseny"]}</h2>
			<p>{data["city"]}, {data["country"]}</p>
		</TrophyTab>
		<TrophyCenter>
			<h3>{t("comp")}</h3>
			<h1>{data["helyezes"]}. {t("place")}</h1>
			<p>({data["indulok"]} {t("starters")})</p>
		</TrophyCenter>
		<TropyDetail>
			{
				Object.keys(data.details).map((item, index) => (
					<DetailItem key={index}>
						<h3>{item}:</h3>
						<p>{data.details[item]}. {t("place")}</p>
					</DetailItem>
					))}
		</TropyDetail>		
	</TrophyContainer>
	)

export default translate("TropyItem")(TrophyItem);
