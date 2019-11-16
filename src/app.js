import React from "react";
import fistImage from "./images/pic.jpg";
import { useDispatch, useSelector } from "react-redux";
import Form from "./form/form";
import "./styles/main.scss";

import { process } from "../assetsTransformer";

const App = () => {
  console.log("process ==> ", process());

  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <h2>Container 1</h2>
        <div className="title">Hello word all is here</div>
        <img data-test="img" src={fistImage} height="400" width="400" />
      </div>
      <button
        onClick={() => {
          dispatch({ type: "ACTION_ONE" });
        }}
      >
        {" "}
        GENERATE ACTION{" "}
      </button>
      <div className="container">
        <h2>Container 2</h2>
        <div className="title">Hello word all is here</div>
        <img data-test="img" src={fistImage} height="400" width="400" />
      </div>
      <Form
        sirName="steve"
        age={40}
        occupation="teacher"
        formArray={["hello", "word"]}
        formObject={{ x: "hey", y: "guys" }}
        formArrayOfObjects={[
          { x: "bye", y: "bye", c: [], f: true },
          { x: "bye", y: "bye", c: [], f: true }
        ]}
      />
    </div>
  );
};

export default App;
