export type UserRole = 'student' | 'admin' | 'staff'

export class User {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public passwordHash: string,
    public role: UserRole = 'student',
    public isActive: boolean = true,
    public readonly createdAt: Date = new Date()
  ) {}
}