import styled from 'styled-components';

export default styled.div`
  display: grid;
  width: 100%;
  margin-top: 5px;
  grid-template-columns: 32.5% 32.5% 32.5%;
  grid-row-gap: 5px;
  justify-content: space-between;
  margin-bottom: 60px;

  .img {
    width: calc(100vw / 3 - 5px);
    height: calc(100vw / 3 - 5px);

    :nth-child(4) {
      width: 100%;
      height: 100%;
      grid-row: 1 / span 2;
      grid-column: 2 / span 2;
    }
  }
`;
