import { Course } from '@domain/entities/Course'

export async function getCourses(): Promise<Course[]> {
  await new Promise((r) => setTimeout(r, 500)) // Simula delay
  return [
    new Course('course-001', 'Intro to Solidity', 'Smart contracts 101', 'inst-1', 'teacher-1'),
    new Course('course-002', 'Advanced Solidity', 'Gas optimization and security', 'inst-1', 'teacher-2', false),
  ]
}