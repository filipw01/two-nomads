import React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';
import styled from 'styled-components';

interface Props extends GatsbyLinkProps<unknown> {
  text: string;
}

const StyledLink = styled(Link)<any>`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.3;
  padding: 0.4rem 2.25rem 0.5rem 2.25rem;
  border: 2px solid var(--text-color);
  border-radius: 2rem;
  text-decoration: none;
  backdrop-filter: blur(4px);
  letter-spacing: 0.2px;
  color: var(--text-color);
  @supports not (backdrop-filter: blur(0)) {
    background: hsla(0, 0%, 0%, 0.25);
  }

  position: relative;
  overflow: hidden;
  :hover {
    ::after {
      clip-path: circle(200% at -20px 50%);
    }
  }
  :active {
    transform: scale(0.97);
  }
  ::after {
    content: '${(props) => props.text}';
    box-sizing: border-box;
    padding: 0.4rem 2.25rem 0.5rem 2.25rem;
    color: var(--heading-alternative-color);

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--heading-color);
    z-index: 1;
    clip-path: circle(0px at -20px 50%);
    transition: clip-path 0.2s ease-out, transform 0.2s ease-out;
  }
`;

const LinkButton: React.FC<Props> = ({ text, ...rest }) => (
  <StyledLink text={text} {...rest}>
    {text}
  </StyledLink>
);

export default LinkButton;
