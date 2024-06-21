import ButtonMui, { ButtonProps as MuiButtonProps } from '@mui/material/Button'

interface ButtonProps extends MuiButtonProps {
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonMui {...props} />
}
