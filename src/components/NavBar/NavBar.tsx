import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 20px; 
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 100;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  padding: 0 20px;
  color: white;
  font-size: 16px;
`;


const Header = () => {
  return (
    <HeaderContainer>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </NavList>
    </HeaderContainer>
  )
}

export default Header;
