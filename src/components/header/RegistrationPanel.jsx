import React, { useEffect, useState } from "react";
import "../../styles/css/header.css";

const RegistrationPanel = ({ closePanel }) => {
  const [isVisible, setIsVisible] = useState(true); // Состояние для плавного появления

  // Функция для плавного закрытия панели
  const handleClose = () => {
    setIsVisible(false); 
    setTimeout(() => closePanel(), 300); // Закрываем компонент после завершения анимации
  };

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => closePanel(), 300); // Убираем панель с задержкой
      return () => clearTimeout(timer);
    }
  }, [isVisible, closePanel]);

  return (
    <>
     
      <div
        id="overlay"
        className={`overlay ${isVisible ? "visible" : ""}`}
        onClick={handleClose}
      ></div>

      {/* Панель регистрации */}
      <div
        id="registerPanel"
        className={`register-panel ${isVisible ? "visible" : ""}`}
      >
        <h2 style={{ marginLeft: "100px" }}>Register</h2>
        <button className="close-btn" onClick={handleClose}>
          ✖
        </button>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="text" placeholder="Username" required />
          <button type="submit">Create an account</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationPanel;
