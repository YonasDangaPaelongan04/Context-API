import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { del } from "../action/ListAction";

const Todos = () => {
  const { lists, dispatch } = useContext(DataContext);
  const remove = (id) => {
    dispatch(del(id));
  };

  return (
    <ul>
      {lists.map((item) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => remove(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
