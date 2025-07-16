import React from "react";
import logo from "../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <img src={logo} alt="BeTalent" className="header__logo" />
      </div>
    </header>
  );
};

export default Header;
