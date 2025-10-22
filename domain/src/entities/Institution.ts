export class Institution {
  constructor(
    public id: string,
    public name: string,
    public address: string,
    public email: string,
    public phone: string,
    public isActive: boolean = true
  ) {}
}