import { TextareaAutosize, TextareaAutosizeProps } from '@mui/material'

export interface TextAreaProps extends TextareaAutosizeProps {}
export const TextArea: React.FC<TextareaAutosizeProps> = (props) => {
  return (
    <TextareaAutosize
      {...props}
      aria-label="empty textarea"
      placeholder="Empty"
    />
  )
}
export default TextArea
