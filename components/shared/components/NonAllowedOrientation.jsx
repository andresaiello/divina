import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default function NonAllowedOrientation () {
  return (
    <Container>
      Por favor, rotá tu móvil para una mejor experiencia usando la app.
    </Container>
  );
}
