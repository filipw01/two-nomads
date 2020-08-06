import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  level?: number;
  as?: number;
}

const Heading: React.FC<Props> = ({ level = 1, as, children }) => {
  const CurrentLevelHeading = `h${level}` as keyof JSX.IntrinsicElements;

  let restStyle;
  const visualLevel = as ?? level;
  switch (visualLevel) {
    case 1:
      restStyle = css`
        font-weight: 700;
        font-size: 3rem;
      `;
      break;

    case 2:
      restStyle = css`
        font-weight: 500;
        font-size: 3rem;
      `;
      break;

    case 3:
      restStyle = css`
        font-weight: 700;
        font-size: 1.375rem;
      `;
      break;

    default:
      break;
  }
  const StyledHeading = styled(CurrentLevelHeading)`
    font-family: 'Zilla Slab';
    line-height: 1.05;
    margin-bottom: 0.3em;
    color: var(--heading-color);
    ${restStyle}
  `;
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
