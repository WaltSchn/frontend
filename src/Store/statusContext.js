import React, { useState, createContext } from "react";

export const StatusContext = createContext();

export const StatusContextProvider = (props) => {
  const [statusNavBar, setStatus] = useState([]);

  return (
    
    <StatusContext.Provider value={{ statusNavBar }}>
      
        {props.children}
     
    </StatusContext.Provider>
    
  );
};
