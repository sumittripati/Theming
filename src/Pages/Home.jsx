import React from 'react'
import { ThemedButton } from './Service.styles'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import './home.css'
import { Button } from "@mui/material";


const Homebutton = styled.button`
  background: ${({ theme }) => theme.homebuttonBg};
  color: ${({ theme }) => theme.homebuttonText};
`
// apply css in material UI element
const MyStyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.homebuttonBg} !important;  
  color: black !important;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px 20px;

  &:hover {
    background-color: #0d47a1;
    transform: scale(1.05);
  }
`;


const Home = () => {

  // let themode = useTheme()
   const { themode } = useTheme();
  return (
    <div>
      <h1>Home Page</h1>
      <ThemedButton className='hmbtn' style={{ border: `2px solid ${themode.homebordercl}` }}>hello ji home button</ThemedButton>
      <Homebutton>Home button kjfnekrf</Homebutton>
      <p>Lorem ipsum dolor sit amet.</p>
      <MyStyledButton variant="contained">
        Styled MUI Button is HERE
      </MyStyledButton>
    </div>
  )
}

export default Home
