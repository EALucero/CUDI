export class Enrollment {
  constructor(
    public id: string,
    public studentId: string,
    public courseId: string,
    public enrolledAt: Date,
    public status: 'active' | 'withdrawn' | 'completed'
  ) {}
}