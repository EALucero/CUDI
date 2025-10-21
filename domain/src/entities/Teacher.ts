export class Teacher {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public institutionId: string,
    public isActive: boolean = true,
  ) {}
}