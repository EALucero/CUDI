import type { Meta, StoryObj } from '@storybook/react'
import { StudentCard } from './StudentCard'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { fn } from '@storybook/test'

const meta: Meta<typeof StudentCard> = {
  title: 'UI/StudentCard',
  component: StudentCard,
  tags: ['autodocs'],
  args: {
    name: 'Lucía Fernández',
    studentId: 'stu-001',
    status: 'activo',
  },
  argTypes: {
    status: {
      control: 'radio',
      options: ['activo', 'inactivo'],
    },
  },
}
export default meta

type Story = StoryObj<typeof StudentCard>

export const Default: Story = {}

export const Inactivo: Story = {
  args: {
    status: 'inactivo',
  },
}

export const Interactivo: Story = {
  args: {
    onEdit: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByText('Editar'))
    expect(args.onEdit).toHaveBeenCalledTimes(1)
  },
}