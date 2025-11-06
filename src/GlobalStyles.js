// Isse likhe styles poore app par apply hote hain, bina kisi class ke.createGlobalStyle ka use global CSS likhne ke liye hota hai (normal CSS file ke jaisa).

import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    transition: all 0.50s linear;
}
a{
    text-decoration: none;
    color: inherit;
}
`
