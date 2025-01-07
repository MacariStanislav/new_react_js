import React from "react";
import AppRoutes from "../Routes/Routes";
import Footer from "../Footer/Footer";
import Siderbar from "../Sidebar/Siderbar";
import Header from "../Header/Header";
import '../styles/app.css';


export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Siderbar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};
export default App;
