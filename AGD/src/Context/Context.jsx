import React, { createContext, useContext, useState } from 'react'

const MyContext = createContext();
export const MyProvider = ({ children }) => {
  const [state, setState] = useState();
   const [open, setOpen] = useState(false);
  return (
  <MyContext.Provider value={{ state, setState,
    open, setOpen
   }}>
      {children}
    </MyContext.Provider>
  )
}

export const useMyContext = () => {
  return useContext(MyContext);
};
