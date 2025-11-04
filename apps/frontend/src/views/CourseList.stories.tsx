import type { Meta, StoryObj } from '@storybook/react'
import { CourseList } from './CourseList'

const meta: Meta<typeof CourseList> = {
  title: 'Views/CourseList',
  component: CourseList,
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof CourseList>

export const Default: Story = {}