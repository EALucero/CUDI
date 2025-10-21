export class Student {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public birthDate: Date,
    public institutionId: string,
    public isActive: boolean = true
  ) {}
}