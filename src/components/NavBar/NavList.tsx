import { useState } from 'react';
import styled from 'styled-components';

const NavItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

const Icon = styled.span`
  margin-right: 8px;
  transition: transform 0.2s ease;
  transform: ${props => (props.isExpanded ? 'rotate(45deg)' : 'rotate(0)')};
`;

const ExpandedContent = styled.div`
  display: ${props => (props.isExpanded ? 'block' : 'none')};
`;

const NavList = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <nav>
      <ul>
        <NavItem onClick={toggleExpand}>
          <Icon isExpanded={isExpanded}>+</Icon>
          Nav Item 1
        </NavItem>
        <ExpandedContent isExpanded={isExpanded}>
          <p>Expanded Content</p>
          <p>More content here...</p>
        </ExpandedContent>
        <NavItem onClick={toggleExpand}>
          <Icon isExpanded={isExpanded}>+</Icon>
          Nav Item 2
        </NavItem>
        <ExpandedContent isExpanded={isExpanded}>
          <p>Expanded Content</p>
          <p>More content here...</p>
        </ExpandedContent>
      </ul>
    </nav>
  );
};

export default NavList;
