import { IconType } from "react-icons"

const sizes = {
  sm: '1rem',
  md: '1.2rem',
  lg: '1.4rem'
}

interface ResponsiveIconProps {
  icon: IconType
  size?: 'sm' | 'md' | 'lg'
}

const ResponsiveIcon = ({ icon: Icon, size }: ResponsiveIconProps) => (
  <Icon size={sizes[size ?? 'md']} />
)

export { ResponsiveIcon }