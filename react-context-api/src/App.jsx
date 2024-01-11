import React, { useEffect } from 'react';
import {UserContextProvider} from "./assets/UserContext";
import Card from "./UI/CardUI";
import ThemeBtn from "./UI/ThemeBtnUI";

const  App = () =>{
  const [themeMode, setThemeMode] = React.useState("light");
  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");
   
  return (
    <UserContextProvider value = {{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap  min-h-screen items-center">
    <div className="">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
      <ThemeBtn />
      </div>
  
      <div className="w-full max-w-sm mx-auto">
      <Card />
      </div>
    </div>{" "}
    
   
  </div>;
    </UserContextProvider>
  );
}

export default  App;

