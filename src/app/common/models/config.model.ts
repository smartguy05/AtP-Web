
export class Config {
  public apiUrl!: string;
  public production!: boolean;

  constructor(partial?: Partial<Config>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
