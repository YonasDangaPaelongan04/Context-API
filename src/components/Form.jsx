import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { add } from "../action/ListAction";

const Form = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(DataContext);
  const change = (e) => {
    setText(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  };
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={text}
        placeholder="Enter New List"
        onChange={change}
      ></input>
      <button>add</button>
    </form>
  );
};

export default Form;
