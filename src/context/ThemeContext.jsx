// import { createContext, useContext, useState, useMemo } from "react";

// // 1️⃣ Create Context
// const ThemeContext = createContext();

// // 2️⃣ Provider Component
// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () =>
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));

//   // useMemo to prevent unnecessary re-renders
//   const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

//   return (
//     <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
//   );
// };

// // 3️⃣ Custom Hook
// export const useTheme = () => useContext(ThemeContext);


import { useMemo } from "react";
import { createContext, useState, useContext } from "react";
// import { themes } from "../Theme.js";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import  {darkTheme, lightTheme} from "../Theme.js";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  let toggleTheme = () => {
   return setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  let themode = theme === "light" ? lightTheme : darkTheme;
  let value = useMemo(() => ({ theme, toggleTheme, themode }), [theme]);

  

  return (
  <ThemeContext.Provider value={value}>
    <StyledThemeProvider theme={themode}>
    {children}
    </StyledThemeProvider>
  </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);