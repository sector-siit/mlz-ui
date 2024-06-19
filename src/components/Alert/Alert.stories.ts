import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Componentes/Alert',
  component: Alert,
  parameters: {
    type: 'success',
    message: 'SUCCESS',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    type: 'success',
    message: 'SUCCESS',
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    message: 'ERROR',
  },
}
