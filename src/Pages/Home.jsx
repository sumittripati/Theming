import React from 'react'
import { ThemedButton } from './Service.styles'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import './home.css'

const Homebutton = styled.button`
  background: ${({ theme }) => theme.homebuttonBg};
  color: ${({ theme }) => theme.homebuttonText};
`

const Home = () => {

  // let themode = useTheme()
   const { themode } = useTheme();
  return (
    <div>
      <h1>Home Page</h1>
      <ThemedButton className='hmbtn' style={{ border: `2px solid ${themode.homebordercl}` }}>hello ji home button</ThemedButton>
      <Homebutton>Home button kjfnekrf</Homebutton>
    </div>
  )
}

export default Home
