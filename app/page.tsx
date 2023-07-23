"use client"

import Footer from '@src/components/Footer/Footer'
import RootLayout from './layout'
import Header from '@src/components/NavBar/NavBar'
import styled from 'styled-components'

const LandingPage = () => {
  return (
    <RootLayout>   
      <StyledOverlay/>   
        <Header/>
        LandingPage
        <Footer/>      
    </RootLayout>
  )
}

const StyledOverlay = styled.div`  
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  bottom: 10px;
  z-index: 1;
  background-color: rgba(235, 228, 228, 0.719);
`;
export default LandingPage