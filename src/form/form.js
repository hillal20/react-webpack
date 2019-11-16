import React, { useState } from "react";
import PropTypes from "prop-types";

let testName;
const Form = props => {
  const {
    sirName,
    age,
    occupation,
    formArray,
    formObject,
    formArrayOfObjects
  } = props;

  const [name, setName] = useState("");
  const nameHandler = event => {
    testName = event.target.value;
    setName(event.target.value);
    console.log("e ==> ", event.target.value);
  };
  const submitHandler = event => {
    event.preventDefault();
  };

  if (!sirName) {
    return <div> Nothing</div>;
  }

  return (
    <div className="formContainer">
      <h1> Form is here </h1>
      <form data-test="form" onSubmit={submitHandler}>
        <p>Name:</p>
        <input
          type="name"
          name="name"
          data-test="input"
          placeholder="Enter Name"
          value={name}
          onChange={nameHandler}
        />
        <input type="submit" name="Submit" />
      </form>
      <div>name:{name}</div>
      <div>SirName:{sirName}</div>
      <div>age:{age}</div>
      <div>occupation:{occupation}</div>
    </div>
  );
};

Form.propTypes = {
  sirName: PropTypes.string,
  age: PropTypes.number,
  occupation: PropTypes.string,
  formArray: PropTypes.array,
  formObject: PropTypes.object,
  formArrayOfObjects: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.string,
      c: PropTypes.array,
      f: PropTypes.bool
    })
  )
};

export { testName };
export default Form;
