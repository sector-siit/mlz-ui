import type { Meta, StoryObj } from '@storybook/react'
import {TextArea} from './TextArea'

const meta = {
  title: 'Componentes/TextArea',
  component: TextArea,
  parameters: {
    
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    
  },  
}