import React from "react";
import { useState } from "react";
import { createContext } from "react";


const UserContext = createContext({
  userData: [],
  setUserData: ()=>{},
});

export function UserContextProvider(props) {
  const [userData,setUserData] = useState([]);

  const context = {
    userData,
    setUserData
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;