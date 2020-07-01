import React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.3;
  padding: 0.5rem 2.25rem;
  border: 2px solid white;
  border-radius: 2rem;
  text-decoration: none;
  backdrop-filter: blur(4px);
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
  ::after {
    content: 'test';
    box-sizing: border-box;
    padding: 0.5rem 2.25rem;
    color: black;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 1;
    clip-path: circle(0px at -20px 50%);
    transition: clip-path 0.2s ease-out;
  }
`;

const LinkButton: React.FC<GatsbyLinkProps<unknown>> = ({ to, children }) => (
  <StyledLink to={to}>{children}</StyledLink>
);

export default LinkButton;
