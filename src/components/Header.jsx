import React, { useState } from "react";
import "../styles/css/header.css";
import logo from "../img/logo/LOGO 1.svg";
import monkey from "../img/icon/monkey.svg";
import lupa from "../img/icon/lupa.svg";
import serdte from '../img/icon/serdte.svg';
import corzina from '../img/icon/corzina.svg';
import RegistrationPanel from './RegistrationPanel'; 

const Header = () => {
  const [searchValue, setSearchValue] = useState("Search for anything...");
  const [isRegistrationVisible, setRegistrationVisible] = useState(false); // Состояние для регистрации

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFocus = () => {
    if (searchValue === "Search for anything...") {
      setSearchValue("");
    }
  };

  const handleBlur = () => {
    if (searchValue === "") {
      setSearchValue("Search for anything...");
    }
  };

  const openRegistrationPanel = () => {
    setRegistrationVisible(true);
  };

  const closeRegistrationPanel = () => {
    setRegistrationVisible(false);
  };

  return (
    <header>
      <img src={logo} className="logo" />
      <div className="circul">
        <img src={monkey} alt="Monkey" />
      </div>

      <h4 id="user" onClick={openRegistrationPanel} style={{ cursor: 'pointer' }}>User</h4>

      <div className="text__input">
        <img src={lupa} alt="Search icon" className="search-icon" />
        <input
          type="text"
          className="search-zone"
          value={searchValue}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <a href="" className="serdte"><img src={serdte} alt="serdte-icon" /> </a>
      <a href=""><img src={corzina} alt="cart-icon" /></a>

      {isRegistrationVisible && <RegistrationPanel closePanel={closeRegistrationPanel} />}
    </header>
  );
};

export default Header;

