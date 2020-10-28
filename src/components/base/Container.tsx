import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div<any>`
  margin-left: auto;
  margin-right: auto;
  ${(props) =>
    // eslint-disable-next-line implicit-arrow-linebreak, operator-linebreak
    props.size === 'small' &&
    css`
      width: 100%;
      @media (min-width: 640px) {
        max-width: 500px;
      }
    `}
  ${(props) =>
    // eslint-disable-next-line implicit-arrow-linebreak, operator-linebreak
    props.size === 'regular' &&
    css`
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
    `}
`;

interface Props {
  padding?: number;
  size?: 'regular' | 'small';
  style?: CSSProperties;
}

const Container: React.FC<Props> = ({
  padding = 2,
  size = 'regular',
  children,
  style,
}) => {
  const paddingString = `${padding}rem`;
  return (
    <StyledContainer
      size={size}
      style={{
        ...{ paddingLeft: paddingString, paddingRight: paddingString },
        ...style,
      }}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
