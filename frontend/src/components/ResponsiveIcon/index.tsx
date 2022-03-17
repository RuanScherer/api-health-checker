import { IconType } from "react-icons";

const sizes = {
  sm: "1rem",
  md: "1.2rem",
  lg: "1.4rem",
};

interface IResponsiveIconProps {
  icon: IconType;
  size?: "sm" | "md" | "lg";
}

function ResponsiveIcon({ icon: Icon, size = "md" }: IResponsiveIconProps) {
  return <Icon size={sizes[size]} />;
}

export { ResponsiveIcon };
