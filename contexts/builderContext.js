import { createContext, useReducer } from "react";
import React from "react";

export const BuilderContext = createContext();

const initialState = {
  blocks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PUSH_HEADING":
      return { ...state, blocks: [...state.blocks, action.payload] };
  }
};

const BuilderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { blocks } = state;

  const pushHeading = (heading) => {
    dispatch({
      type: "PUSH_HEADING",
      payload: { type: "Heading", value: heading },
    });
  };
  return (
    <BuilderContext.Provider value={{ blocks, pushHeading }}>
      {children}
    </BuilderContext.Provider>
  );
};

export default BuilderProvider;
