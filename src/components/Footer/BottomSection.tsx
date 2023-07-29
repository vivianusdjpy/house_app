import styled from "styled-components"

const StyledBottomContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 200px;
  top: 0;
  background-color: #030316;
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
  width: 40%;
  height: 20%;
  top: 0;
  border: 1px solid white;
`
const BottomSection = () => {
  return (
    <StyledBottomContainer>
      < TextContainer>
         About
         Contact us
      </TextContainer>
    </StyledBottomContainer>
  )
}

export default BottomSection