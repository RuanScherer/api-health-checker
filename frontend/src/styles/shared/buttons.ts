import styled from "styled-components";

const defaultButtonSizes = {
  sm: {
    gap: ".4rem",
    padding: ".5rem .8rem",
    fontSize: "0.8rem",
  },
  md: {
    gap: ".5rem",
    padding: ".6rem .9rem",
    fontSize: "0.875rem",
  },
  lg: {
    gap: ".8rem",
    padding: ".8rem 1.1rem",
    fontSize: "1rem",
  },
};

interface IDefaultButtonProps {
  backgroundColor?: string;
  color?: string;
  centralize?: boolean;
  size?: "sm" | "md" | "lg";
}

const DefaultButton = styled.button<IDefaultButtonProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.centralize ? "center" : "flex-start")};
  gap: ${(props) => defaultButtonSizes[props.size ?? "md"].gap};

  border: 0;
  padding: ${(props) => defaultButtonSizes[props.size ?? "md"].padding};

  background-color: ${(props) => props.backgroundColor ?? "var(--gray-100)"};
  color: ${(props) => props.color ?? "#040044"};

  font-size: ${(props) => defaultButtonSizes[props.size ?? "md"].fontSize};

  &:hover {
    filter: brightness(0.9);
  }

  &, & * {
    cursor: pointer;
  }
`;

const iconButtonSizes = {
  sm: {
    padding: ".4rem",
  },
  md: {
    padding: ".5rem",
  },
  lg: {
    padding: ".8rem",
  },
};

export const IconButton = styled(DefaultButton)`
  padding: ${(props) => iconButtonSizes[props.size ?? "md"].padding};
  border-radius: 100%;
`;

export const FilledButton = styled(DefaultButton)`
  border-radius: 8px;
`;
