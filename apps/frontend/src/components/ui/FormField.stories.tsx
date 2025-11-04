import type { Meta, StoryObj } from '@storybook/react'
import { FormField } from './FormField'

const meta: Meta<typeof FormField> = {
  title: 'UI/FormField',
  component: FormField,
  args: {
    label: 'Nombre',
    name: 'name',
    value: '',
    onChange: () => {},
  },
}
export default meta

type Story = StoryObj<typeof FormField>

export const Vacío: Story = {}

export const ConTexto: Story = {
  args: {
    value: 'Juan Topo',
  },
}

export const ConError: Story = {
  args: {
    error: 'Este campo es obligatorio',
  },
}