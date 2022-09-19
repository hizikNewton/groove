import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 292px auto;
  height: 100vh;
  background: #0f0f0f;
  position: fixed;
  main {
    overflow: scroll;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
