import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledMenuItem = styled(Link)`
  margin-left: 2rem;
  font-family: 'Zilla Slab';
  font-weight: 500;
`;

interface Props {
  name: string;
  link: string;
}

const MenuItem: React.FC<Props> = ({ name, link }) => {
  return <StyledMenuItem to={link}>{name}</StyledMenuItem>;
};

export default MenuItem;
