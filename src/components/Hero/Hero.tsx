import styled from "styled-components"
import SearchIcon from "@mui/icons-material/Search"

const Hero = () => {
	return (
		<HeroContainer>
      <VerticalLine/>
			<TextContainer>
				<WelcomeText>Welcome</WelcomeText>
				<ToText> ____ to your new home</ToText>

				<SearchBarContainer>
					<Input type="text" placeholder="Search by location" />
					<Select>
						<option value="">Property Type</option>
						<option value="house">House</option>
						<option value="apartment">Apartment</option>
						<option value="condo">Condo</option>
					</Select>

					<Button>
						<StyledSearchIcon />
					</Button>
				</SearchBarContainer>
			</TextContainer>

			<ImageContainer>
				<StyledImage
					src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
	background-color: #030316;
`;
const VerticalLine = styled.div`
  position: absolute;
  height: 100%;
  width: 0.5px; 
  background-color: white; 
  left: 60px; 
`;

const TextContainer = styled.div`
	flex-direction: column;
	margin-left: 130px;
	width: 50%;
`
const WelcomeText = styled.p`
	color: white;
	font-size: 65px;
	text-align: center;
`

const ToText = styled.p`
	color: white;
	font-size: 45px;
	text-align: center;
`

const SearchBarContainer = styled.div`
	display: flex;
	width: 80%;
	margin-left: 30px;
	align-items: center;
	border: none;
	justify-content: space-between;
	padding: 0%;
	background-color: white;
`

const Input = styled.p`
	margin-right: 10px;
`

const Select = styled.select`
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-right: 10px;
`

const Button = styled.button`
	padding: 1px 2px;
	background-color: #fab521;
	color: white;
	border: none;

	cursor: pointer;

	&:hover {
		background-color: #e29939;
	}
`
const StyledSearchIcon = styled(SearchIcon)`
	color: black;
	font-size: 30px;
`

const ImageContainer = styled.div`
	width: 40%;
	height: 80%;
	margin-left: auto;
	margin-top: 45px;
	overflow: hidden;
`

const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`
export default Hero
