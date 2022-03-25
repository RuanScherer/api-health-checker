import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  margin: 1rem; /* remove */
  border-radius: 8px;

  &:hover {
    filter: brightness(0.95);
    transform: scale(1.05);
  }

  .select-button {
    align-self: stretch;
    border-radius: 0 0 8px 8px;
    cursor: pointer;
  }
`;

export const HealthCheckTypeInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  background-color: var(--white-50);

  padding: 0.8rem 1rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

interface IHealthCheckTypeDescriptionProps {
  chipColor: string;
}

export const HealthCheckTypeDescription = styled.div<IHealthCheckTypeDescriptionProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h2 {
    line-height: 1;
    font-size: 1.2rem;
    font-weight: 500;

    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.05rem 0.5rem;
    border: 1px solid ${(props) => props.chipColor};
    border-radius: 1rem;

    color: ${(props) => props.chipColor};
  }
`;
