import React from "react";
import NavBar from "./components/navbar/NavBar";
import "./index.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="nav">
      <Header/>
      <NavBar />
    </div>
  );
}

export default App;
