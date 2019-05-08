import React from 'react';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  object-fit: cover;
`;

export default function PostImage() {
  return <StyledImage height="375px" />;
}
