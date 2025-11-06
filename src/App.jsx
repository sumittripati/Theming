import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
// import { GlobalStyle } from './GlobalStyles'

const App = () => {
  return (
     <>
    {/* <GlobalStyle /> */}
    <Header/>
    <Routes>
      <Route path='/' element={<Home />}>Home</Route>
      <Route path='/about' element={<About />}>About</Route>
      <Route path='/service' element={<Service />}>Service</Route>
    </Routes>
    <Footer/>
     </>
  )
}

export default App
