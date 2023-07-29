import styled from 'styled-components';

const FullWidthImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 400px;
  overflow: hidden; 
`;

const FullWidthImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

const ContactUs = styled.div`
  position: absolute;  
  margin-left: 200px;
  margin-top: 100px;
  height: 30%;
  width: 45%;
  background-color: white;
  padding: 20px;
  padding-left: 60px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 35px;
  width: 80%;
`;
const ContactText = styled.p`
  color: black;
  font-size: 30px;
  text-align: left;
  margin-top: 10px;
`;

const TextInput = styled.input`
  flex: 1;
  border: none;
  outline:none;

`;
const SendButton = styled.button`
  width: 60px;
  height: 100%;
  margin-left: 8px;
  background-color: #fab521;
  color: white;
  border: none;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FullWidthImageContainer>
      <FullWidthImage src="https://www.apartments.com/images/librariesprovider2/blank-images/parkline-apartment-in-miami-flba486679-f59b-475d-885a-ae52659d1e51.jpg?sfvrsn=264e5d72_1" alt="Image" />
      
      <ContactUs>
        <ContactText>Contact Us</ContactText>  
        <InputContainer>
          <TextInput type="text" placeholder="Enter your message"/>
            <SendButton>Send</SendButton>
        </InputContainer>        
      </ContactUs>
    </FullWidthImageContainer>

  );
};

export default Footer;