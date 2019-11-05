import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const nameHandler = event => {
    console.log("text==> ", event.target.value);
    setName(event.target.value);
  };
  const submitHandler = event => {
    event.preventDefault();
    console.log("==> ", name);
  };

  return (
    <div>
      <h1> Form is here </h1>
      <form onSubmit={submitHandler}>
        <p>Name:</p>
        <input placeholder="Enter Name" onChange={nameHandler} />
        <input type="submit" name="Submit" />
      </form>
    </div>
  );
};
export default Form;
