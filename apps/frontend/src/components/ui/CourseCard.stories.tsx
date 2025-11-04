import type { Meta, StoryObj } from '@storybook/react'
import { CourseCard } from '@components/ui/CourseCard'
import { Course } from '@domain/entities/Course'

const sampleCourse = new Course(
  'course-001',
  'ETH-Kipu - Intro to Solidity',
  'Learn smart contract development with hands-on examples.',
  'institution-123',
  'teacher-456',
  true
)

const meta: Meta<typeof CourseCard> = {
  title: 'UI/CourseCard',
  component: CourseCard,
  tags: ['autodocs'],
  args: {
    name: sampleCourse.name,
    code: sampleCourse.id,
    status: sampleCourse.isActive ? 'activo' : 'inactivo',
  },
}
export default meta

type Story = StoryObj<typeof CourseCard>

export const Default: Story = {}

export const Inactive: Story = {
  args: {
    name: 'Advanced Solidity',
    code: 'course-002',
    status: 'inactivo',
  },
}