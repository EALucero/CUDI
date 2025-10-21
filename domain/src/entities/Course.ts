export class Course {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public institutionId: string,
    public teacherId: string,
    public isActive: boolean = true
  ) {}
}