import styled from "styled-components"
import SearchIcon from "@mui/icons-material/Search"

const Reviews = () => {
	return (
		<HeroContainer>
            
			<TextContainer>
				<WelcomeText>Reviews</WelcomeText>
				<AboutText>
					{" "}
					We aim to maximize your investments and provide a stress-free experience. 
                    We strive to create harmonious living
					environments and seamless interactions. Trust us to safeguard your
					investments and deliver exceptional services. Join us today to experience
					hassle-free property management like never before!
				</AboutText>
                <AboutText>
					{" "}
					We aim to maximize your investments and provide a stress-free experience. 
                    We strive to create harmonious living
					environments and seamless interactions. Trust us to safeguard your
					investments and deliver exceptional services. Join us today to experience
					hassle-free property management like never before!
				</AboutText>
			</TextContainer>			
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
export default Reviews
