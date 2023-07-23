"use client"

import Footer from '@src/components/Footer/Footer'
import RootLayout from './layout'
import Hero from '@src/components/Hero/Hero'
import styled from 'styled-components'

const LandingPage = () => {
  return (
    <StyledOverlay>          
        <Hero/>
        LandingPage
        <Footer/>      
    </StyledOverlay>
  )
}

const StyledOverlay = styled.div`  
  position: absolute;
  top: 30px;
  left: 30px;
  bottom: 30px;
  right: 30px;  
  z-index: 1;
  background-color: #f7f4f4;
`;
export default LandingPage