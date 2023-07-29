import styled from "styled-components"

const FullWidthImageContainer = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 400px;
	overflow: hidden;
`

const FullWidthImage = styled.img`
	width: 100%;
	display: block;
	object-fit: cover;
`

const ContactUs = styled.div`
	position: absolute;
	margin-left: 250px;
	margin-top: 30px;
	height: 70%;
	width: 28%;
	background-color: white;
	padding: 20px;
	padding-left: 60px;
`

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid black;
	height: 35px;
	width: 80%;
`
const ContactText = styled.p`
	color: black;
	font-size: 30px;
	text-align: left;
	margin-top: 10px;
`

const TextInput = styled.input`
	flex: 1;
	border: none;
	outline: none;
`
const SendButton = styled.button`
	width: 100%;
	height: 100%;
	margin-left: 8px;
	background-color: #fab521;
	color: black;
	border: none;
	cursor: pointer;
`

const ShowMore = () => {
	return (
		<FullWidthImageContainer>
			<FullWidthImage
				src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
				alt="Image"
			/>

			<ContactUs>
				<ContactText></ContactText>
				<InputContainer>
					<SendButton>Show More</SendButton>
				</InputContainer>
			</ContactUs>
		</FullWidthImageContainer>
	)
}

export default ShowMore
