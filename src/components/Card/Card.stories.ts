import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Componentes/Card',
  component: Card,
  parameters: {
    title: 'Card Title',
    content: 'Card contet',
    imageUrl: 'https://picsum.photos/id/237/200/300',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    title: 'Card Title',
    content: 'Card contet',
    imageUrl: 'https://picsum.photos/id/237/200/300',
  },
}
