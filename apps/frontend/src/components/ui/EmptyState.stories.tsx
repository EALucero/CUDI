import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState } from './EmptyState'

const meta: Meta<typeof EmptyState> = {
  title: 'UI/EmptyState',
  component: EmptyState,
  args: {
    message: 'No hay estudiantes registrados aún.',
  },
}
export default meta

type Story = StoryObj<typeof EmptyState>

export const Default: Story = {}