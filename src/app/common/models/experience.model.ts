
export class Experience {
  public employmentDates!: { "start": string, "end"?: string };
  public jobTitle!: string;
  public employer!: string;
  public location!: {
    "city": string,
    "state": string,
    "address"?: string
  };
  public technologies!: string[];
  public description!: string;
  public duties?: {
    "title": string,
    "bullets": string[]
  }

  constructor(partial?: Partial<Experience>) {
    if (partial) {
      Object.assign(this, partial)
    }
  }
}
