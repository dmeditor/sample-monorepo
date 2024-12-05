import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { dmeInit } from "shared/dmeConfig/dmeInit";
import { Edit } from "./Edit";

dmeInit();

function App() {
  return (
    <div className="App">
      <Edit />
    </div>
  );
}

export default App;
