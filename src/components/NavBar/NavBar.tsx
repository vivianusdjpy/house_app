// components/Navbar.js (for JavaScript) or components/Navbar.jsx (for JSX)
import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Brand = styled.div`
  font-weight: bold;
  margin-right: auto;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-right: 20px;
`;

const ExpandableItem = styled.li`
  position: relative;
  margin-right: 20px;
  cursor: pointer;

  &:hover .expandable-list {
    display: block;
  }
`;

const ExpandableList = styled.ul`
  list-style: none;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 10px;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Brand>
        {/* Navbar brand/logo */}
      </Brand>
      <Links>
        <LinkItem>
          <a href="#">Home</a>
        </LinkItem>
        <LinkItem>
          <a href="#">About</a>
        </LinkItem>
        {/* Add other menu items as needed */}
        <ExpandableItem>
          <span>More</span>
          <ExpandableList className="expandable-list">
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            {/* Add more expandable list items as needed */}
          </ExpandableList>
        </ExpandableItem>
      </Links>
    </NavContainer>
  );
};

export default Navbar;
