import MuiAlert from '@mui/material/Alert'

export interface AlertProps {
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
}

export const Alert = ({ type, message }: AlertProps) => {
  return <MuiAlert severity={type}>{message}</MuiAlert>
}
