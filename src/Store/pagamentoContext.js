import React, { useState, createContext } from "react";

export const PagamentoContext = createContext();

export const PagamentoContextProvider = (props) => {
 
  const [pagamentoButton, setpagamentoButton] = useState([]);

  return (
    
    <PagamentoContext.Provider value={{  pagamentoButton, setpagamentoButton }}>
      
        {props.children}
     
    </PagamentoContext.Provider>
    
  );
};
