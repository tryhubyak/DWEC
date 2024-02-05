export class Task {
  isStarted: boolean = false;
  isFinished: boolean = false;
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public init_date: Date,
    public end_date: Date,
    public subject: string,
    public asigned_person: string,
    public estimated_duration: Date,
    public real_time: Date,
    public formatted_init_date: string | undefined,
    public formatted_end_date: string | undefined

  ) {}
}
