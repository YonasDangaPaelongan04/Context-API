import React, { useReducer, createContext } from "react";
import { listReducer } from "../reducers/ListReducer";

export const DataContext = createContext();

const initialState = [
  {
    id: 1,
    title: "This Is Tittle One",
  },
];

export const DataProvider = (props) => {
  const [lists, dispatch] = useReducer(listReducer, initialState);

  return (
    <DataContext.Provider value={{ lists, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
};
