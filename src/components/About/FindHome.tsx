import styled from "styled-components"
import SearchIcon from "@mui/icons-material/Search"

const FindHome = () => {
	return (
		<HeroContainer>
            
			<TextContainer>
				<WelcomeText>Find your new home</WelcomeText>
				<AboutText>
					{" "}
					We aim to maximize your investments and provide a stress-free experience. 
                    We strive to create harmonious living
					environments and seamless interactions. Trust us to safeguard your
					investments and deliver exceptional services. Join us today to experience
					hassle-free property management like never before!
				</AboutText>
			</TextContainer>
            <ImageContainer>
				<StyledImage
					src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
					alt="image"
				/>
			</ImageContainer>
			
		</HeroContainer>
	)
}

const HeroContainer = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 500px;
	top: 0;
	background-color: white;
`
const TextContainer = styled.div`
	flex-direction: column;
	margin-left: 100px;
	width: 40%;
`
const WelcomeText = styled.p`
	color: black;
	font-size: 45px;
	text-align: center;
`

const AboutText = styled.p`
	color: black;
	font-size: 18px;
	text-align: left;
`

const ImageContainer = styled.div`
    margin-left: 50px;
	width: 33%;
	height: 80%;
	margin-top: 45px;
	overflow: hidden;
`

const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`
export default FindHome
