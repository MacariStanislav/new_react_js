import React, { useState } from "react";
import '../styles/css/header.css';
import logo from "../img/logo/LOGO 1.svg";
const Header = () => {
  // Состояние для управления значением input
  const [searchValue, setSearchValue] = useState("Search for anything...");

  // Обработчик изменения текста в input
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Обработчик для очистки значения input при фокусе
  const handleFocus = () => {
    if (searchValue === "Search for anything...") {
      setSearchValue("");
    }
  };

  // Обработчик для восстановления текста по умолчанию, если input пуст
  const handleBlur = () => {
    if (searchValue === "") {
      setSearchValue("Search for anything...");
    }
  };

  return (
    <header>
      <img src={logo} className="logo" />

      <div>
        <img
          src="path/to/your/monkey.png"
          alt="Monkey"
          className="monkey-img"
        />
      </div>

      <p id="user">User</p>

      <div className="text__input">
        <img
          src="img/icon/lupa.svg"
          alt="Search icon"
          className="search-icon"
        />
        <input
          type="text"
          className="search-zone"
          value={searchValue}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </header>
  );
};

export default Header;
