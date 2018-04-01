import React, { Component } from "react";
import classNames from "classnames";
import { translate } from "react-i18next";
import styled from "styled-components";

const Switcher = styled.div`
  padding: 0px 10px;
`

const Button = styled.button`
  margin: 0px 5px;
  background-color: Transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #000;
  text-decoration: underline;
`

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    const { i18n } = this.props;
    this.state = { language: i18n.language };

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language });
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  }

  renderLanguageChoice({ code, label }) {
    return (
      <Button
        style={{color: "black"}}
        key={code}
        onClick={() => this.handleChangeLanguage(code)}
      >
        <span>{label}</span>
      </Button>
    );
  }

  render() {
    const languages = [
      { code: "en", label: "EN" },
      { code: "hu", label: "HU" },
    ];

    return (
      <Switcher>
        {languages.map(language => this.renderLanguageChoice(language))}
      </Switcher>
    );
  }
}

export default translate()(LanguageSwitcher);