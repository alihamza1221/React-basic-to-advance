import React,{useContext} from 'react';
const UserContext = React.createContext({
   themeMode : "light",
   lightTheme: () => {},
   darkTheme: () =>{},
}
);

export const UserContextProvider = UserContext.Provider;

export default function setTheme(){
   return useContext(UserContext);
}