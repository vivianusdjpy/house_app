import styled from "styled-components";

const Hero = () => {
  return (
    <HeroContainer>

      <ImageContainer>
          <StyledImage src="../../../public/assets/headerImage.jpg" alt="Image"/>
      </ImageContainer>

    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  width: 100%;
  height: 500px; 
  position: relative;
  top: 0;
  left: 0;
  background-color: #00001a;
  z-index: 100;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  border: 1px solid white;
  top: 100px;
  left: 0px;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  
`;






export default Hero