import React, { useState, createContext } from "react";

export const EntregaContext = createContext();

export const EntregaContextProvider = (props) => {
 
  const [entregaButton, setentregaButton] = useState([]);

  return (
    
    <EntregaContext.Provider value={{  entregaButton, setentregaButton }}>
      
        {props.children}
     
    </EntregaContext.Provider>
    
  );
};
