"use client"

import Footer from '@src/components/Footer/Footer'
import RootLayout from './layout'
import Hero from '@src/components/Hero/Hero'
import styled from 'styled-components'
import About from '@src/components/About/About'
import BottomSection from '@src/components/Footer/BottomSection'
import FindHome from '@src/components/About/FindHome'
import ShowMore from '@src/components/About/ShowMore'
import Reviews from '@src/components/About/Reviews'

const LandingPage = () => {
  return (
    <StyledOverlay>          
        <Hero/>
        <About/>
        <FindHome/>
        <ShowMore/>
        <Reviews/>
        <Footer/> 
        <BottomSection/>     
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