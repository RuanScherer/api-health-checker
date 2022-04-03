import styled from "styled-components";

export const HealthCheckSelectionContainer = styled.div`
  background-color: #000000cc;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    margin-bottom: 1.5rem;
  }

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.4rem; 
  }
`;
