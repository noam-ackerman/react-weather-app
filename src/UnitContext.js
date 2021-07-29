import React, { useState, createContext } from "react";

export const UnitContext = createContext();

export const UnitName = (props) => {
  let [unit, setUnit] = useState("celsius");
  return (
    <UnitContext.Provider value={[unit, setUnit]}>
      {props.children}
    </UnitContext.Provider>
  );
};
