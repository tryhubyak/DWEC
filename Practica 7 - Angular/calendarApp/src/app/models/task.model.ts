export class Task {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public init_date: Date | undefined,
    public end_date: Date | undefined,
    public subject: string,
    public asigned_person: string,
    public estimated_duration: Date,
    public real_time: Date | undefined
  ) {}
}
