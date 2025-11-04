import type { Meta, StoryObj } from '@storybook/react'
import { SubmitButton } from './SubmitButton'
import { expect, fn, userEvent, screen } from '@storybook/test'

const meta: Meta<typeof SubmitButton> = {
  title: 'UI/SubmitButton',
  component: SubmitButton,
  args: {
    children: 'Registrar',
    onClick: fn(),
  },
}
export default meta

type Story = StoryObj<typeof SubmitButton>

export const Normal: Story = {}

export const Interactivo: Story = {
  play: async ({ args }) => {
    await userEvent.click(screen.getByText('Registrar'))
    expect(args.onClick).toHaveBeenCalledTimes(1)
  },
}

export const Cargando: Story = {
  args: {
    loading: true,
  },
}

export const Deshabilitado: Story = {
  args: {
    disabled: true,
  },
}