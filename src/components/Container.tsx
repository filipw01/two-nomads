import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

interface Props {
  padding?: number;
}

const Container: React.FC<Props> = ({ padding = 2, children }) => {
  const paddingString = `${padding}rem`;
  return (
    <StyledContainer
      style={{ paddingLeft: paddingString, paddingRight: paddingString }}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
