import React from "react";
import Helmet from "react-helmet";

import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

import FormulaStudent from "../components/FormulaStudent";
import Wins from "../components/Wins";
import Teams from "../components/Teams";
import AboutUs from "../components/AboutUs";

export default class About extends React.Component {
  render = () => {
    return (
      <div>
        <FormulaStudent />
        <AboutUs />
      </div>
    );
  }
}