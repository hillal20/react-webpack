import React from "react";
const fistImage = require("./images/pic.jpg");
import Form from "./form/form";
import "./styles/main.scss";
const App = () => {
  return (
    <div>
      <div class="container">
        <h2>Container 1</h2>
        <div class="title">Hello word all is here</div>
        <img src={fistImage} height="400" width="400" />
      </div>
      <div class="container">
        <h2>Container 2</h2>
        <div class="title">Hello word all is here</div>
        <img src={fistImage} height="400" width="400" />
      </div>
      <Form />
    </div>
  );
};

export default App;
