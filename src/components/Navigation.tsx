import React from 'react';
import styled from 'styled-components';
import Container from './base/Container';
import MenuItem from './MenuItem';
import { SecondaryTextColor } from './base/Colors';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 0;
  color: var(--text-color);
`;

const Navigation: React.FC<unknown> = () => {
  const menuItems = [
    { name: 'test', link: '/test' },
    { name: 'test2', link: '/test2' },
  ];
  return (
    <Container style={{ position: 'relative', zIndex: 2 }}>
      <SecondaryTextColor>
        <StyledHeader>
          <div>2N</div>
          <ul>
            {menuItems.map((menuItem) => {
              const { name, link } = menuItem;
              return <MenuItem key={name} name={name} link={link} />;
            })}
          </ul>
        </StyledHeader>
      </SecondaryTextColor>
    </Container>
  );
};

export default Navigation;
