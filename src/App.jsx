import React from "react";
import Calculator from "./Calculator";

const App = () => {
  return (
    <div className="container">
      <div style={{ color: "white", textAlign: "center" }}>
        <h1>Kalkulator React!</h1>
      </div>
      <Calculator />
    </div>
  );
};

export default App;
