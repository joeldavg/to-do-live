import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  note: {
    id: "",
    title: "",
    message: "",
    done: false,
  },
  listOfNotes: [
    {
      id: "0",
      title: "Title by default",
      message: "Message by default",
      done: true,
    },
    {
      id: "1",
      title: "First Note",
      message: "First Message",
      done: true,
    },
    {
      id: "2",
      title: "Second Note",
      message: "Second Message",
      done: true,
    },
  ],
};

const Store = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default StoreProvider;

export { Store, initialState };
