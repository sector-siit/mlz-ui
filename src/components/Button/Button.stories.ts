import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Componentes/Button',
  component: Button,
  parameters: {
    variant: 'contained',
    color: 'primary',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Contained: Story = {
  args: {
   variant: 'contained',
    color: 'primary',
    children: 'Primary',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'secondary',
    children: 'Outlined',
  },
}
