import type { Meta, StoryObj } from '@storybook/react'
import { CourseDashboard } from './CourseDashboard'

const meta: Meta<typeof CourseDashboard> = {
  title: 'Views/CourseDashboard',
  component: CourseDashboard,
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof CourseDashboard>

export const Default: Story = {}