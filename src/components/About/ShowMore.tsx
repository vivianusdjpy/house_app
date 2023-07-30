import styled from "styled-components"

const FullWidthImageContainer = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 500px;
	overflow: hidden;
`

const FullWidthImage = styled.img`
	width: 100%;
	display: block;
	object-fit: cover;
`

const ContactUs = styled.div`
	position: absolute;
	align-items: center;
	margin-left: 60%;
	margin-top: 40px;
	height: 70%;
	width: 25%;
	background-color: white;
	padding: 20px;
	padding-left: 50px;
`

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #fab521;
	height: 35px;
	width: 80%;
`

const TextInput = styled.input`
	flex: 1;
	border: none;
	outline: none;
`
const SendButton = styled.button`
	width: 100%;
	height: 100%;
	background-color: #fab521;
	border: none;
	padding: 5px;
	cursor: pointer;
`
const SearchBarContainer = styled.div`
	width: 90%;
	margin-left: 0px;
	align-items: center;
	border: none;
	padding: 0%;
	background-color: white;
	  

`
const Input = styled.input`
	padding: 2px;
	outline: none;
    height: 25px;
    width: 97%;


	
	&:focus {
		border-color: #007bff;
	}
`

const Select = styled.select`
	border: 1px solid #ccc;
	width: 100%;
	height: 45px;
`

const ShowMore = () => {
	return (
		<FullWidthImageContainer>
			<FullWidthImage
				src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
				alt="Image"
			/>

			<ContactUs>
				<SearchBarContainer>
					
					
					<Select>
						<option value="">Location</option>
						<option value="house">House</option>
						<option value="apartment">Apartment</option>
						<option value="condo">Condo</option>
					</Select>
                    <Input type="text" placeholder="Nairobi, Kenya" />
				</SearchBarContainer>

				<SearchBarContainer>
				
					
					<Select>
						<option value="">Number of bedrooms</option>
						<option value="house">House</option>
						<option value="apartment">Apartment</option>
						<option value="condo">Condo</option>
					</Select>
                    <Input type="number" placeholder="3" />
				</SearchBarContainer>

				<SearchBarContainer>
				
					
					<Select>
						<option value="Enter amount">Enter amount</option>
						<option value="house">House</option>
						<option value="apartment">Apartment</option>
						<option value="condo">Condo</option>
					</Select>
                    <Input type="text" placeholder="0" />
				</SearchBarContainer>

				<InputContainer>
					<SendButton>Show More</SendButton>
				</InputContainer>
			</ContactUs>
		</FullWidthImageContainer>
	)
}

export default ShowMore
