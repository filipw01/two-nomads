import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import MenuItem from './MenuItem';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 0;
`;

const Navigation: React.FC<unknown> = () => {
  const menuItems = [
    { name: 'test', link: '/test' },
    { name: 'test2', link: '/test2' },
  ];
  return (
    <Container>
      <StyledHeader>
        <div>2N</div>
        <ul>
          {menuItems.map((menuItem) => {
            const { name, link } = menuItem;
            return <MenuItem name={name} link={link} />;
          })}
        </ul>
      </StyledHeader>
    </Container>
  );
};

export default Navigation;
